export default function DatocmsLink({modelId, itemId, friendlyName}) {

  return (
    <div className="uk-position-relative">
      <div className="uk-position-center" style={{marginTop: "-15px"}}>
        <a target="_blank" href={`${process.env.NEXT_PUBLIC_DATO_PROJECT_URL}editor/item_types/${modelId}/items/${itemId}`} className="uk-button uk-button-small uk-button-danger uk-icon" >{friendlyName} - {itemId} &nbsp;<span class="uk-icon" uk-icon="pencil"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"></path><path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"></path></svg></span></a>
      </div>
    </div>
  )
}