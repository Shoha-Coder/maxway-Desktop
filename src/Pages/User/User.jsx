import React from 'react';
import Style from "./User.module.scss";
import Container from '@/components/Container/Container';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const User = () => {
    const [userData, setUserData] = useState()
    const Api = "http://localhost:9000/Users";
    const params = useParams();
    const { t } = useTranslation()
    useEffect(() => {
        localStorage.getItem("login").includes(userData)
    }, [params.userId]);
    return (
        <Container>
            {/* @todo */}
        </Container>
    )
}

export default User