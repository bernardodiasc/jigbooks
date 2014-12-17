(function() {

    var director;
    var image;
    var scene;

    new CAAT.ImagePreloader().loadImages(
        [
            {id:'image',    url: 'resources/images/image.jpg'}
        ],
        function( counter, images ) {
            if ( counter===images.length ) {

                director= new CAAT.Director().initialize( 800, 600 );
                director.setImagesCache( images );
                director.addAudio("11", "resources/sounds/11.ogg").addAudio("12", "resources/sounds/12.ogg").addAudio("win", "resources/sounds/win.ogg");
                scene= director.createScene();

                image= director.getImage("image");
                var cimage= document.createElement("canvas");
                cimage.width= image.width;
                cimage.height= image.height;
                var cctx= cimage.getContext("2d");
                cctx.drawImage( image, 0, 0 );
                image= cimage;

                if (CocoonJS.Camera.getNumberOfCameras() > 0)
                {
                    var im = CocoonJS.Camera.startCapturing(0, 640, 480, 20);
                    if (im != null)
                    {
                        setInterval( function() {
                            cctx.drawImage( im, 0, 0, cimage.width, cimage.height );
                        }, 60 );
                    }
                }
                else
                {
                    console.log("Sorry, it seems that there is no camera available in the system. The game will work using a static image.");
                }

                start();

            }
        });

    function start() {
        var puzzle= new Puzzle.Game().setImage( director, image ).setTable( 2,2, 800,600 );
        scene.addChild( puzzle );

        scene.createTimer(
            0, 3000,
            function() {
                puzzle.start();
            }
        )
        CAAT.loop(60)

    }
})();
