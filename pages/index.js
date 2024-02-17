import React from 'react';
import Layout from "../components/Layout";
import Link from "next/link";

import AllMyproperties from "./allproperties";

import Head from "next/head";



const Index = () => (
     <div>
   <Layout
        mainTitle="allproperties"
        footer={`Copyright ${new Date().getFullYear()}`}
    >
   
    Index sgettin called agagin
     
    </Layout>
       </div>
);

export default Index;