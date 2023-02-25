import React from 'react';
import AddHomeIcon from '@mui/icons-material/AddHome';
import RowingIcon from '@mui/icons-material/Rowing';
import DiningIcon from '@mui/icons-material/Dining';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ChatIcon from '@mui/icons-material/Chat';
import CallIcon from '@mui/icons-material/Call';
import PermMediaIcon from '@mui/icons-material/PermMedia';

export const VerticalBarData = [
    {
        title: "Home",
        icon: <AddHomeIcon />,
        link: "/home"
    },
    {
        title: "Activities",
        icon: <RowingIcon />,
        link: "/activities"
    },
    {
        title: "Images",
        icon: <PermMediaIcon />,
        link: "/images"
    },
    {
        title: "Dine",
        icon: <DiningIcon />,
        link: "/dine"
    },
    {
        title: "Book Activity",
        icon: <BookmarkIcon />,
        link: "/bookactivity"
    },
    {
        title: "Chat",
        icon: <ChatIcon />,
        link: "/chat"
    },
    {
        title: "Contact",
        icon: <CallIcon />,
        link: "/contact"
    }
];