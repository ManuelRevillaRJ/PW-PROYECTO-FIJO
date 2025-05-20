interface SubmitButtonProps {
    label: string;
}

const SubmitButton = (props: SubmitButtonProps) => {
    return <button type="submit" className="btn btn-primary mt-2 mb-2 w-100">
        {props.label}
    </button>;
};

export default SubmitButton;
