import React, { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import { Bolt } from 'lucide-react';
import CriarPost from '../../pages/CriarPost';
import EncurtarLink from '../../pages/EncurtarLink';
import { useAuth } from '../../contexts/AuthContext';
import styled from 'styled-components';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [openShortener, setOpenShortener] = useState(false);
    const [openCreatePost, setOpenCreatePost] = useState(false);
    const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
    const { logout } = useAuth();

    const handleMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const openShortenerModal = () => { handleMenuClose(); setOpenShortener(true); };
    const openCreatePostModal = () => { handleMenuClose(); setOpenCreatePost(true); };

    const handleLogout = () => {
        handleMenuClose();
        logout();
    };

    const closeCreatePostModal = () => {
        setOpenCreatePost(false);
    };

    const closeShortenerModal = () => {
        setOpenShortener(false);
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsScrollTopVisible(true);
            } else {
                setIsScrollTopVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            <Button onClick={handleMenuOpen} color="primary" id="basic-button" $isScrollTopVisible={isScrollTopVisible}>
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
                <MenuItem onClick={handleLogout}>Sair</MenuItem>
            </Menu>

            <Dialog
                open={openShortener}
                onClose={closeShortenerModal}
                fullWidth={false}
                maxWidth={false}
                PaperProps={{
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        overflow: 'hidden'
                    }
                }}
            >
                <EncurtarLink onLinkCreated={closeShortenerModal} />
            </Dialog>

            <Dialog
                open={openCreatePost}
                onClose={closeCreatePostModal}
                fullWidth={false}
                maxWidth={false}
                PaperProps={{
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        overflow: 'hidden'
                    }
                }}
            >
                <CriarPost onPostCreated={closeCreatePostModal} />
            </Dialog>
        </>
    );
}

const Button = styled.button<{ $isScrollTopVisible: boolean }>`
  position: fixed;
  bottom: ${(props) => (props.$isScrollTopVisible ? '6rem' : '2rem')};
  right: 2rem;
  width: 3rem;
  height: 3rem;
  background: linear-gradient(to right, #06b6d4, #3b82f6);
  color: white;
  border: none;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(6, 182, 212, 0.25);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 50;

  &:hover {
    background: linear-gradient(to right, #0891b2, #2563eb);
    transform: scale(1.1);
  }
`
