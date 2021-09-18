fetch("/api/slider")
    .then(res => res.json())
    .then(json => {
        let main = document.getElementById("main-slider");
        main.innerHTML = "";
        for(let i = 0; i < json.length; i++) {
            let div = document.createElement("div");
            div.className = "single-slide";
            div.innerHTML = `\
                <div className="bg-img kenburns-top-right" style="background-image: url();"></div>\
            <div className="overlay"></div>\
            <div className="slider-content-wrap d-flex align-items-center text-left">\
                <div className="container">\
                    <div className="slider-content">\
                        <div className="dl-caption medium">\
                            <div className="inner-layer">\
                                <div data-animation="fade-in-right" data-delay="1s">${json[i].name}</div>\
                            </div>\
                        </div>\
                        <div className="dl-caption dl-border" data-animation="fade-in-left" data-delay="0s"></div>\
                        <div className="dl-caption big">\
                            <div className="inner-layer">\
                                <div data-animation="fade-in-left" data-delay="2s">Dream home might be</div>\
                            </div>\
                        </div>\
                        <div className="dl-caption big">\
                            <div className="inner-layer">\
                                <div data-animation="fade-in-left" data-delay="2.5s">closer than you think.</div>\
                            </div>\
                        </div>\
                        <div className="dl-caption small">\
                            <div className="inner-layer">\
                                <div data-animation="fade-in-left" data-delay="3s">Business is the activity of making  money.\
                                </div>\
                            </div>\
                        </div>\
                        <div className="dl-btn-group">\
                            <div className="inner-layer">\
                                <a href="#" className="dl-btn" data-animation="fade-in-left" data-delay="3.5s">View\
                                    Projects <i className="arrow_right"></i></a>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\ `;
            main.appendChild(div);
        }
    })
    .catch(err => {if (err) console.log(err);});