import axios from "axios";

const showNotification = (message) => {
    alert(message);
};

export const openApi = (baseURL) => {
    const resolvedBaseURL = baseURL;

    const instance = axios.create({ baseURL: resolvedBaseURL });

    instance.interceptors.response.use(
        (response) => response,
        (error) => handleError(error),
    );

    return instance;
};

const handleError = (error) => {
    if (!error.response) {
        showNotification('Ошибка сети или сервера.');
        throw error;
    } else if (error.response.data?.message) {
        showNotification(error.response.data.message);
    } else {
        showNotification('Что-то пошло не так.');
    }   

    throw error;
};
            