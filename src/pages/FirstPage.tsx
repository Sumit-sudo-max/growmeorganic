import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

interface FormData {
    name: string;
    phoneNumber: string;
    email: string;
}

const FirstPage = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phoneNumber: '',
        email: '',
});

    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        navigate('/second-page');
    };

    return (
        <div className='okay'>
            <form className='form' onSubmit={handleSubmit}>
                <div className="form-item">
                    <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    />
                </div>
                <div className="form-item">
                    <TextField
                    label="Phone number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    fullWidth
                    />
                </div>
                <div className="form-item">
                    <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    />
                </div>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default FirstPage;
