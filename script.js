const initialPath = `M 10 100 Q 500 100 990 100`
const finalPath = `M 10 100 Q 500 100 990 100`

const string = document.querySelector("#string")

string.addEventListener("mousemove", function(dets){
    path = `M 10 100 Q 500 ${dets.y} 990 100`
    console.log(path);
    gsap.to("svg path",{
        attr: {d: path},
        duration: 0.6,
        ease: "power3.out"
    })
})


string.addEventListener("mouseleave", function(){
    console.log("out");
    path = `M 10 100 Q 500 100 990 100`
    gsap.to("svg path", {
        attr: {d: path},
        duration: 1.5,
        ease: "elastic.out(1,0.2"
    })
})