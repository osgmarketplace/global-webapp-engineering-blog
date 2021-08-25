const BASE_URL = "/global-webapp-engineering-blog";

const buildImageUrl = (imageFileName: string): string =>
    `${BASE_URL}/img/${imageFileName}`;

export default buildImageUrl;
