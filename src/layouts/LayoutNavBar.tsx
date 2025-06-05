import NavBar from "../components/NavBar"

export default function LayoutNavBar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: "70px" }}>{children}</div>
    </>
  )
}
