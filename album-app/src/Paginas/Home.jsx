import React from 'react';
import { useEffect, useState } from 'react';

import Image from './Comopentes/Images';
import Header from './Comopentes/Header';
import { Add } from './Comopentes/AddImage';
import { useSelector } from 'react-redux';

export default function Home() {

    const bool = useSelector(state => state.bool);
    const auth = useSelector(state => state.auth);

    return(
        <div>
            {bool ?  '': <Header />
            }
            <Image />
            {bool ? <Add /> : ''}
        </div>
    )
}