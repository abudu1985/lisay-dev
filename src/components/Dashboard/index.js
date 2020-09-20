import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './style.css'
import Spinner from '../Spinner';
import RoundButton from '../RoundButton';
import withToastProvider from  "../../components/Toaster/withToastProvider";
import useToast from "../../components/Toaster/useToast";
import Firestore from "../../services/db/articleFunctions";
import {getArticles} from "../../store/selectors/articlesSelectors";


const Dashboard = ({history}) => {
    const [tableData, setTableData] = useState([]);
    const toast = useToast();
    const articles = useSelector(getArticles);
    const dispatch = useDispatch();

    console.log('articles -> ', articles);
    useEffect(() => {
        setTableData(articles);
    }, [articles]);

    function onEdit(data) {
        history.push({
            pathname: `/articles/${data.slug}/edit`,
            state: {data}
        })
    }

    function onDelete(id) {
        window.confirm("Are you sure you wish to delete this article?");
        if (!id) {toast.add('No ID in request!', 'danger'); return};
        Firestore.deleteArticle(id).then(ref => {
            dispatch({type: 'DELETE_ARTICLE', payload: id});
            toast.add('Article was deleted!', 'success');
        })
            .catch(error => {
                toast.add(`${error}`, 'danger');
            });
    }

    return <div>
        {tableData.length ?
            <table>
                <caption>A summary of articles</caption>
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Tags</th>
                    <th scope="col">Published</th>
                    <th scope="col">Preview</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {tableData.map(doc => (
                    <tr key={doc.title}>
                        <th scope="row">{doc.title}</th>
                        <td>{doc.tagList.map(tag => (<span key={tag}>{tag}&nbsp;</span>))}</td>

                        <th scope="row">
                            <span className={doc.isPublished ? "published-blue" : "published-red"}>
                                {doc.isPublished ? <span>&#10004;</span> : <span>&#x2716;</span>}
                            </span>
                        </th>
                        <th scope="row">
                            <img className="dashboardPreviewImage" src={doc.articlePreview} alt=""/>
                        </th>

                        <th scope="row">
                            <RoundButton innerHtml={'Edit'} onClick={() => onEdit(doc)}/>
                            <RoundButton innerHtml={'Delete'} onClick={() => onDelete(doc.id)} color={'red'}/>
                        </th>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                <tr>
                    <th scope="row" colSpan="5">{`Total  ${tableData.length}`}</th>
                </tr>
                </tfoot>
            </table> : <Spinner/>
        }
    </div>
};

export default withToastProvider(Dashboard);