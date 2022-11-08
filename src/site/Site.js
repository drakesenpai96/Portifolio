import './Site.css'

function Site({nome, caminho, }){

    return(
        <div className="Watch">
            <div className="videoCont">
                <video width='500' height='300' controls>
                    <source src='/videos/video1.mp4' type="video/mp4"></source>
                </video>
            </div>
            
        </div>
    )
}

export default Site