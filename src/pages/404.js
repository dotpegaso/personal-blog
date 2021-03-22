import * as React from "react";
import { Link } from "gatsby";

import { Layout } from "../components";

const NotFoundPage = () => (
  <Layout>
    <h1>The big empty</h1>
    <Link to="/">Back to home screen</Link>
  </Layout>
);

export default NotFoundPage;
