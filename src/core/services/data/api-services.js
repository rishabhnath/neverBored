import React from 'react';
import { TYPE_FORM_DATA, TYPE_JSON } from '../../../utils/constants/http_type.js';

export default class APIServices extends React.Component {
    constructor(props) {
        super(props);
        this.error = false;
        this.results = {};
    }
    getHeaders(type) {
        let headers = {};
        if (!(localStorage.getItem("authToken") === null)) {
            const tokenType = "bearer";
            headers = {
                Authorization: `${tokenType} ${localStorage.getItem("authToken")}`
            };
            let contentType = {};
            if (type === TYPE_FORM_DATA) {
                contentType = { Accept: "application/json" };
            } else {
                contentType = { "content-type": "application/json" };
            }
            headers = { ...headers, ...contentType };
        } else if (type === TYPE_FORM_DATA) {
            headers = {
                Accept: "application/json"
            };
        } else {
            const contentType = { "content-type": "application/json" };
            headers = { ...headers, ...contentType };
        }
        return headers;
    }

    /* GET method call with fetch */
    async get(url) {
        await fetch(url, {
            method: "GET",
            headers: this.getHeaders("")
        })
            .then((response) => {
                this.status = response.status;
                return response.json();
            })
            .then((jsonResponse) => {
                this.results = jsonResponse;
            })
            .catch((e) => {
                // console.log(e);
            });
        if (this.status !== 200) {
            this.error = true;
            // this.checkErrors();
        }
        return {
            error: this.error,
            results: this.results,
            status: this.status
        };
    }

    /* POST method call with fetch */
    async post(url, data, type) {
        // var dataToSend = data;

        if (!(type === TYPE_FORM_DATA)) {
            data = JSON.stringify(data);
        }

        await fetch(url, {
            method: "POST",
            body: data,
            headers: this.getHeaders(type)
        })
            .then((response) => {
                this.status = response.status;
                return response.json();
            })
            .then((jsonResponse) => {
                this.results = jsonResponse;
            })
            .catch((e) => {
                console.log(e);
            });
        if (!(this.status === 201 || this.status === 200)) {
            this.error = true;
            // this.checkErrors();
        }
        return {
            error: this.error,
            status: this.status,
            results: this.results
        };
    }
    async patch(url, data, type) {
        if (type !== TYPE_FORM_DATA) {
            data = JSON.stringify(data);
        }
        await fetch(url, {
            method: "PATCH",
            body: data,
            headers: this.getHeaders(type)
        })
            .then((response) => {
                this.status = response.status;
                return response.json();
            })
            .then((jsonResponse) => {
                this.results = jsonResponse;
            })
            .catch((e) => {
                // console.log(e);
            });
        if (this.status !== 200) {
            this.error = true;
            // this.checkErrors();
        }
        return {
            error: this.error,
            results: this.results,
            status: this.status
        };
    }

    async delete(url) {
        await fetch(url, {
            method: "DELETE",
            headers: this.getHeaders()
        })
            .then((response) => {
                this.status = response.status;
                if (this.status !== 204) {
                    return response.json();
                }
            })
            .then((jsonResponse) => {
                this.results = jsonResponse;
            })
            .catch((e) => {
                console.log(e);
            });
        if (this.status !== 204) {
            this.error = true;
        }
        return {
            error: this.error,
            results: this.results,
            status: this.status
        };
    }

    async put(url, data, type) {
        if (type !== TYPE_FORM_DATA) {
            data = JSON.stringify(data);
        }
        await fetch(url, {
            method: "PUT",
            body: data,
            headers: this.getHeaders(type)
        })
            .then((response) => {
                this.status = response.status;
                return response.json();
            })
            .then((jsonResponse) => {
                this.results = jsonResponse;
            })
            .catch((e) => {
                // console.log(e);
            });
        if (this.status !== 200) {
            this.error = true;
            // this.checkErrors();
        }
        return {
            error: this.error,
            results: this.results,
            status: this.status
        };
    }
}
