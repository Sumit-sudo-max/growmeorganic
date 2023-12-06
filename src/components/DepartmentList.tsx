import React, { useState, ReactNode } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface Department {
    id: number;
    name: string;
    subDepartments?: Department[];
}

interface DepartmentListProps {
    data: Department[];
}

const DepartmentList = ({ data }: DepartmentListProps) => {
    const [open, setOpen] = useState<number[]>([]);

    const handleClick = (id: number) => {
        setOpen((prevOpen) => (prevOpen.includes(id) ? prevOpen.filter((item) => item !== id) : [...prevOpen, id]));
    };

    const renderDepartments = (departments: Department[]): ReactNode => {
        return departments.map((department) => (
        <React.Fragment key={department.id}>
            <ListItem button onClick={() => handleClick(department.id)}>
            <ListItemIcon>
                {open.includes(department.id) ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
            <ListItemText primary={department.name} />
            </ListItem>
            <Collapse in={open.includes(department.id)} timeout="auto" unmountOnExit>
            {department.subDepartments && renderDepartments(department.subDepartments)}
            </Collapse>
        </React.Fragment>
        ));
    };

    return (
        <List>
        <Typography variant="h6">Department List</Typography>
        {renderDepartments(data)}
        </List>
    );
};

export default DepartmentList;
