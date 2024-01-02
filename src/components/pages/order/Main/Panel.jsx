import PanelButton from "./PanelButton";

export default function Panel() {
  return (
    <div>
      <div className="button-container">
        <PanelButton />
        <PanelButton />
        <PanelButton />
      </div>
      <div className="description">
        Description
      </div>
    </div>
  )
}
