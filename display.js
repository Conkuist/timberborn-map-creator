const xmlns = "http://www.w3.org/2000/svg"

export function displayMap(width = 64, height = 64, scale = 8) {

    let svg = document.createElementNS(xmlns,"svg");
    svg.setAttribute("viewBox",`0,0,${width},${height}`);
    svg.setAttribute("width",width * scale);
    svg.setAttribute("height",height * scale);
    document.body.appendChild(svg);

    for(let x = 0; x < width; x++)
    {
        for(let y = 0; y < height; y++)
        {
            let color;

            if(x % 2 == y % 2)
            {
                color = "white";
            }
            else {

                color = "grey";
            }

            svg.appendChild(new Rect(x,y,color))
        }
    }
}

function Rect(x,y,color) {

    let rect = document.createElementNS(xmlns,"rect");
    rect.setAttribute("x",x);
    rect.setAttribute("y",y);
    rect.setAttribute("width",1);
    rect.setAttribute("height",1);
    rect.setAttribute("fill",color);

    return rect;
}