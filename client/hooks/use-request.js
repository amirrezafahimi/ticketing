import axios from "axios";
import React, {useState} from "react";

export default ({url, method, body, onSucess}) => {
    const [errors, setErrors] = useState(null);

    const doRequest = async () => {
        try {
            setErrors(null);
            const response = await axios[method](url, body);

            if (onSucess) {
                onSucess(response.data);
            }

            return response.data;
        } catch (e) {
            setErrors(
                <div className="alert alert-danger">
                    <h4>Ooops...</h4>
                    <ul className="my-0">
                        {errors.map(err => <li key={err.message}>{err.message}</li>)}
                    </ul>
                </div>
            );
        }
    };

    return {doRequest, errors};
};