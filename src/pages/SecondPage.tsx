import axios from 'axios';
import { useQuery } from 'react-query';
import DepartmentList from '../components/DepartmentList';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data as Post[];
};

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'body', headerName: 'Body', width: 400 },
];

const departmentData = [
    {
        id: 1,
        name: 'Department A',
        subDepartments: [
        { id: 11, name: 'Sub Department A.1' },
        { id: 12, name: 'Sub Department A.2' },
        ],
    },
    {
        id: 2,
        name: 'Department B',
        subDepartments: [
        { id: 21, name: 'Sub Department B.1' },
        { id: 22, name: 'Sub Department B.2' },
        ],
    },
];

const SecondPage = () => {
    const { data: posts, isLoading, isError } = useQuery('posts', fetchPosts);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading data</div>;
    }

    return (
        <div className='post'>
            <h2>Posts</h2>
            <DataGrid rows={posts || []} columns={columns} style={{color:'black', width:'50vw'}}/>
            <DepartmentList data={departmentData} />
        </div>
    );
};

export default SecondPage;
