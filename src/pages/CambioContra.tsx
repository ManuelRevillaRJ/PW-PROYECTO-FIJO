import { useState, type FormEvent } from "react"
import LayoutNavBar from "../layouts/LayoutNavBar"
import { useUser } from "../hooks/useUser"

export default function CambioContra() {
  const { changePassword } = useUser()

  const [formData, setFormData] = useState({
    // correo: sessionStorage.getItem("mail") || "",
    correo: localStorage.getItem("token") || "",
    newPassword: "",
    confirmPassword: "",
    errorMsg: "",
    successMsg: "",
  })

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault()

    if (formData.newPassword !== formData.confirmPassword) {
      setFormData({ ...formData, errorMsg: "Ambas contraseñas deben ser iguales", successMsg: "" })
      return
    }

    const success = await changePassword(formData.correo, formData.newPassword)

    if (success) {
      setFormData({
        ...formData,
        newPassword: "",
        confirmPassword: "",
        errorMsg: "",
        successMsg: "Contraseña cambiada exitosamente. Revise su correo para iniciar sesión.",
      })
    } else {
      setFormData({
        ...formData,
        errorMsg: "Hubo un error al cambiar la contraseña",
        successMsg: "",
      })
    }
  }

  return (
    <LayoutNavBar>
      <div className="container mt-5 justify-content-center d-flex">
        <div className="card" style={{ maxWidth: "500px", width: "100%" }}>
          <div className="card-body text-center">
            <h3 className="card-title mb-4">Reestablecer Contraseña</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 text-start">
                <label className="form-label">Correo Electrónico:</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailFormControl"
                  placeholder="correo@ejemplo.com"
                  aria-describedby="emailHelpBlock"
                  value={formData.correo}
                  onChange={(e) => setFormData({ ...formData, correo: e.currentTarget.value })}
                />
                <div id="emailHelpBlock" className="form-text">
                  Debes ingresar tu correo verificado para mandarte un mensaje de restauración de
                  contraseña.
                </div>
              </div>
              <div className="mb-3 text-start">
                <label className="form-label">Nueva Contraseña:</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassFormControl"
                  value={formData.newPassword}
                  onChange={(e) => setFormData({ ...formData, newPassword: e.currentTarget.value })}
                />
              </div>
              <div className="mb-3 text-start">
                <label className="form-label">Confirmar Contraseña:</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassConfFormControl"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, confirmPassword: e.currentTarget.value })
                  }
                />
              </div>
              <button className="btn btn-primary mt-2 mb-2" type="submit">
                Mandar correo de restauración
              </button>
              {formData.errorMsg !== "" && (
                <label className="form-label">{formData.errorMsg}</label>
              )}
              {formData.successMsg !== "" && (
                <label className="form-label">{formData.successMsg}</label>
              )}
            </form>
          </div>
        </div>
      </div>
    </LayoutNavBar>
  )
}
