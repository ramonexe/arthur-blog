import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import { Bolt } from 'lucide-react';
import CreatePost from '../../pages/CreatePost';
import AdminPanel from '../../pages/AdminPanel';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [openShortener, setOpenShortener] = useState(false);
    const [openCreatePost, setOpenCreatePost] = useState(false);

    const handleMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const openShortenerModal = () => { handleMenuClose(); setOpenShortener(true); };
    const openCreatePostModal = () => { handleMenuClose(); setOpenCreatePost(true); };

    return (
        <>
            <Button onClick={handleMenuOpen} variant="contained" color="primary" id="basic-button">
                <Bolt />
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                MenuListProps={{ 'aria-labelledby': 'basic-button' }}
            >
                <MenuItem onClick={openShortenerModal}>Encurtar Link</MenuItem>
                <MenuItem onClick={openCreatePostModal}>Criar Post</MenuItem>
                <MenuItem onClick={() => { handleMenuClose(); localStorage.removeItem('user'); window.location.reload(); }}>Sair</MenuItem>
            </Menu>

            <Dialog
                open={openShortener}
                onClose={() => setOpenShortener(false)}
                fullWidth={false}
                maxWidth={false}
                PaperProps={{
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none'
                    }
                }}
            >
                <AdminPanel />
            </Dialog>

            <Dialog
                open={openCreatePost}
                onClose={() => setOpenCreatePost(false)}
                fullWidth={false}
                maxWidth={false}
                PaperProps={{
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none'
                    }
                }}
            >
                <CreatePost />
            </Dialog>
        </>
    );
}
