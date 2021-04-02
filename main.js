var canvas = new fabric.Canvas('myCanvas')
player_x=10;
player_y=10
block_width=30
block_height=30
var player_object="";
var block_object="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y, left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object= Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y, left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if(e.shiftKey==true && keypressed =='80'){
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width
        document.getElementById("current_height").innerHTML=block_height
}
if(e.shiftKey==true && keypressed =='77'){
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("current_width").innerHTML=block_width
    document.getElementById("current_height").innerHTML=block_height
}
    if(keypressed=='70'){
    new_image('ironman_face.png');
    console.log("f")
}
if(keypressed=='66'){
    new_image('spiderman_body.png');
    console.log("b")
}
if(keypressed=='76'){
    new_image('hulk_legs.png');
    console.log("l")
}
if(keypressed=='82'){
    new_image('hulk_right_hand');
    console.log("r")
}
if(keypressed=='72'){
    new_image('captain_america_left_hand.png');
    console.log("h")
}
if(keypressed=='38')
{
    up();
    console.log("up");
}
if(keypressed=='40')
{
    down();
    console.log("down");
}
if(keypressed=='39')
{
    right();
    console.log("right");
}
if(keypressed=='37')
{
    left();
    console.log("left");
}
}
