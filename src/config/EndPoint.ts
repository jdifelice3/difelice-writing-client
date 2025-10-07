export const getEndpoints = (mode: string) => {
    const prodEndPoints = {
        VITE_API_BASE_URL: "https://difelice-writing-server.onrender.com",
        VITE_API_IP: "0.0.0.0"
    };
    
    const devEndPoints = {
        VITE_API_BASE_URL: "http://localhost:3000",
        VITE_API_IP: "127.0.0.1",
        VITE_WEB_SERVER_HOST: "localhost",
        VITE_API_PORT: "3000"
    };

    if (mode === 'production') {
        return prodEndPoints;        
    } else {
        return devEndPoints;
    }   

}
