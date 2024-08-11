import "./fieldForm.css";

export const fieldForm = ({
  labelText,
  type = "text",
  placeholder = "",
  required = true,
}) => {
  return `
        <div class="fieldForm">
            <label>${labelText}</label>
            <input type="${type}" ${
    required ? "required" : ""
  } placeholder="${placeholder}"/>
        </div>
    `;
};
