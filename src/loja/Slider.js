import './Slider.css'

function Slider(){
    let cont = 1
    function nextImage(){
        cont++
        if(cont > 4){
            cont = 1
        }
        document.getElementById('radio'+cont).checked = true
        
    }
    function Test(){
        alert('test')
    }
    return(
        <div>
            <div className='slider'>
                <div className='slides'>   
                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />
                    <input type="radio" name="radio-btn" id="radio4" />

                    <div className='slide o' id='test'>
                        <img src='/images/intro.png' alt='react' id='img1'/>
                    </div>
                    <div className='slide t'>
                        <img src='/images/React.png' alt='python' id='img2'/>
                    </div>
                    <div className='slide tt'>
                        <img src='/images/Python.png' alt='python' id='img3'/>
                    </div>

                    <div className='slide f'>
                        <img src='/images/Php.png' alt='python' id='img4'/>
                    </div>

                    <div className='nav-auto'>
                        <div className='auto-btn1'></div>
                        <div className='auto-btn2'></div>
                        <div className='auto-btn3'></div>
                        <div className='auto-btn4'></div>
                    </div>
                    <button className='btnL'>left</button> 
                    <button className='btnR'>right</button>
                </div>

                <div className='manual-nav'>
                    <label htmlFor="radio1" className='manual-btn'></label>
                    <label htmlFor="radio2" className='manual-btn'></label>
                    <label htmlFor="radio3" className='manual-btn'></label>
                    <label htmlFor="radio4" className='manual-btn'></label>
                </div>
                
                {   setInterval(function(){
                        nextImage()
                    }, 4000)
                }
            </div>
        </div>
    )
}

export default Slider