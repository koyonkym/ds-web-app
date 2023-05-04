import { useState } from 'react';

function Form() {
    const [form, setForm] = useState({
        pregnancies: "",
        glucose: "",
        blood_presure: "",
        skin_thickness: "",
        inslulin_level: "",
        bmi: "",
        diabetes_pedigree: "",
        age: ""
    });

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const form_data = new FormData();
        form_data.append("1", form.pregnancies);
        form_data.append("2", form.glucose);
        form_data.append("3", form.blood_presure);
        form_data.append("4", form.skin_thickness);
        form_data.append("5", form.inslulin_level);
        form_data.append("6", form.bmi);
        form_data.append("7", form.diabetes_pedigree);
        form_data.append("8", form.age);

        fetch('https://dsmodeldeployment3.herokuapp.com/predict', {
            method: 'POST',
            body: form_data
        })
            .then(response => response.text())
            .then(html => {
                setResult(html);
                setLoading(false);
            })
    };

    const onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setForm({ ...form, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Diabetes Prediction Model</h4>
            <p>Example to Predict Probability of Diabetes</p>
            <input type="number" name="pregnancies" onChange={onChange} placeholder="Number of pregnancies" />
            <input type="number" name="glucose" onChange={onChange} placeholder="Glucose level in Sugar" />
            <input type="number" name="blood_presure" onChange={onChange} placeholder="Blood Presure" />
            <input type="number" name="skin_thickness" onChange={onChange} placeholder="Skin Thickness" />
            <input type="number" name="inslulin_level" onChange={onChange} placeholder="Insulin Level" />
            <input type="number" name="bmi" onChange={onChange} placeholder="Body Mass Index (BMI)" />
            <input type="number" name="diabetes_pedigree" onChange={onChange} placeholder="Diabetes pedigree Function" />
            <input type="number" name="age" onChange={onChange} placeholder="Age" />
            <button type="submit" disabled={loading}>{loading ? "Predicting Result..." : "Submit Form"}</button>

            {result && <dev dangerouslySetInnerHTML={{ __html: result }}/>}
        </form>
    );
}

export default Form;
