import NotificationTemplateForm from "../components/NotificationTemplateForm/NotificationTemplateForm"


const NotificationTemplateContainer = () => {
  return (
    <>
    <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "10vh",
          height: "100vh",
          backgroundColor: "#f0f0f0",
        }}
      >

      <NotificationTemplateForm></NotificationTemplateForm>
      </div>
    
    </>
  )
}

export default NotificationTemplateContainer