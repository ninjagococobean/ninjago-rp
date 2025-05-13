let mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . . d 5 d 5 d . . . . . . 
    . . . . . 5 7 5 7 5 . . . . . . 
    . . . . . 5 f 5 f 5 . . . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . . 7 7 5 7 7 7 7 . . . . . 
    . . . . 7 5 5 5 7 7 7 . . . . . 
    . . . . 7 7 5 7 7 7 7 . . . . . 
    . . . . f 7 7 7 7 7 f . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . . f f f f f . . . . . . 
    `, SpriteKind.Player)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e f 5 f e . . . . . . 
    . . . . . 5 1 5 1 5 . . . . . . 
    . . . . . 5 8 8 8 5 . . . . . . 
    . . . . 8 8 b b b 8 8 . . . . . 
    . . . . 8 8 8 b 8 b 8 . . . . . 
    . . . . 8 8 b b b b 8 . . . . . 
    . . . . 5 b b 8 8 8 5 . . . . . 
    . . . . . 8 8 b b 8 . . . . . . 
    . . . . . b b 8 b b . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    `, SpriteKind.Player)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f 7 7 7 7 7 f . . . . . 
    . . . . f 7 f 7 f 7 f . . . . . 
    . . . . f 7 f 7 f 7 f . . . . . 
    . . . . f 7 7 7 7 7 f . . . . . 
    . . . . f 7 7 7 7 7 f . . . . . 
    . . . . 7 6 6 6 6 6 7 . . . . . 
    . . . . 7 6 6 6 6 6 7 . . . . . 
    . . . . 7 6 6 6 6 6 7 . . . . . 
    . . . . f 6 6 6 6 6 f . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    `, SpriteKind.Player)
let mySprite5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . d d d d d d d . . . . . 
    . . . d d d d d d d d d . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 f 5 f 5 . . . . . . 
    . . . . . 5 f 1 f 5 . . . . . . 
    . . 5 5 . 5 1 1 1 5 . . . . . . 
    . 5 5 1 5 1 1 1 1 1 5 5 . . . . 
    . 5 5 5 1 1 5 5 5 1 1 5 5 . . . 
    . . . . 1 1 5 5 5 1 1 . . . . . 
    . . . . 1 1 1 5 1 1 1 . . . . . 
    . . . . 5 1 1 1 1 1 5 . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    `, SpriteKind.Player)
let mySprite6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . 2 5 5 5 5 5 2 . . . . . 
    . . . . 2 5 f 5 f 5 2 . . . . . 
    . . . . 2 5 f 5 f 5 2 . . . . . 
    . . . . 2 5 2 2 2 5 2 . . . . . 
    . . . . 2 2 4 4 4 2 2 . . . . . 
    . . . . 2 2 5 4 5 2 2 . . . . . 
    . . . . 2 2 2 4 2 2 2 . . . . . 
    . . . . 2 b b b b b 2 . . . . . 
    . . . . 5 2 6 2 2 6 5 . . . . . 
    . . . . . 6 2 2 6 2 . . . . . . 
    . . . . . 2 6 2 6 2 . . . . . . 
    . . . . . 6 2 2 2 6 . . . . . . 
    `, SpriteKind.Player)
let mySprite7 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 9 9 9 . . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . 9 9 6 9 6 9 9 . . . . . 
    . . . . 9 9 6 9 6 9 9 . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . 8 9 9 9 9 9 8 . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite8 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . c c c c c . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b 9 b 9 b . . . . . . 
    . . . . . b f b f b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 b b b 1 . . . . . 
    . . . . 1 1 1 b 9 b 1 . . . . . 
    . . . . 1 1 1 b b b 1 . . . . . 
    . . . . b 1 1 1 1 1 b . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    `, SpriteKind.Player)
let mySprite9 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 4 4 4 4 4 4 4 7 . . . . 
    . . . 7 4 7 4 4 4 7 4 7 . . . . 
    . . . 7 4 7 4 4 4 7 4 7 . . . . 
    . . . 7 4 4 4 4 4 4 4 7 . . . . 
    . . . 7 7 4 4 4 4 4 7 7 . . . . 
    . . . . 7 7 4 4 4 7 7 . . . . . 
    . . . . 4 f 7 7 7 7 4 . . . . . 
    . . . . 4 f f 7 7 7 4 . . . . . 
    . . . . 4 7 f f 7 7 4 . . . . . 
    . . . . 4 7 7 f f f 4 . . . . . 
    . . . . . 7 7 f 7 7 . . . . . . 
    . . . . . f f f 7 7 . . . . . . 
    `, SpriteKind.Player)
let mySprite10 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f 5 5 5 5 5 f . . . . . 
    . . . . f 5 4 5 4 5 f . . . . . 
    . . . . f 5 f 5 f 5 f . . . . . 
    . . . . f 5 5 5 5 5 f . . . . . 
    . . . f f 5 f f f 5 f f . . . . 
    . . f f f f f f f f f f f . . . 
    . . . . f 4 4 4 f f f . . . . . 
    . . . . f f f 4 f f f . . . . . 
    . . . . f f f 4 f f f . . . . . 
    . . . . 4 f f 4 4 f 4 . . . . . 
    . . . . . f f 4 f f . . . . . . 
    . . . . . 4 4 4 f f . . . . . . 
    . . . . . 4 f f f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
controller.moveSprite(mySprite2)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555ffffffff555555555555555555555
    55555555555555555555555555555555555555555555555555555555555555555555fffffffffffff55555555555555555555555555555555555555555555555555ffffffff555555555555555555555
    55555555555555555555555555555555555555555555555555555555555555555555fffffffffffff55555555555555555555555555555555555555555555555555ffffffff555555555555555555555
    55555555555555555555555555555555555555555555555555555555555555555555fffffffffffff55555555555555555555555555555555555555555555555555ffffffff555555555555555555555
    55555555555555555555555555555555555555555555555555555555555555555555fffffffffffff55555555555555555555555555555555555555555555555555ffffffff555555555555555555555
    55555555555555555555555555555555555555555555555555555555555555555555fffffffffffff55555555555555555555555555555555555555555555555555ffffffff555555555555555555555
    55555555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffff
    555555555555555555555555555555555555555555555555555555555555ffffffffffffff5555555555555555555555555555555555555555555555555555555555fffffffff5555555555555555555
    555555555555555555555555555555555555555555555555555555555555ffffffffffffff5555555555555555555555555555555555555555555555555555555555fffffffff5555555555555555555
    555555555555555555555555555555555555555555555555555555555555ffffffffffffff5555555555555555555555555555555555555555555555555555555555fffffffff5555555555555555555
    555555555555555555555555555555555555555555555555555555555555ffffffffffffff5555555555555555555555555555555555555555555555555555555555fffffffff5555555555555555555
    555555555555555555555555555555555555555555555555555555555555ffffffffffffff5555555555555555555555555555555555555555555555555555555555fffffffff5555555555555555555
    555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    55555555555555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    55555555555555555555555555555555555555555555555555555555555555555555ffffffff5555555555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffff
    55555555555555555555555555555555555555555555555555555555555555555555ffffffff5555555555555555555555555555555555555555555555555555555555fffffffff55555555555555555
    55555555555555555555555555555555555555555555555555555555555555555555ffffffff5555555555555555555555555555555555555555555555555555555555fffffffff55555555555555555
    55555555555555555555555555555555555555555555555555555555555555555555ffffffff5555555555555555555555555555555555555555555555555555555555fffffffff55555555555555555
    55555555555555555555555555555555555555555555555555555555555555555555ffffffff5555555555555555555555555555555555555555555555555555555555fffffffff55555555555555555
    55555555555555555555555555555555555555555555555555555555555555555555ffffffff5555555555555555555555555555555555555555555555555555555555fffffffff55555555555555555
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555555555555fffffffff5555555555555555555
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555555555555fffffffff5555555555555555555
    55555555555555555555555555555555555555555555555555555555555555555555555fffffffff5555555555555555555555555555555555555555555555555555fffffffff5555555555555555555
    55555555555555555555555555555555555555555555555555555555555555555555555fffffffff5555555555555555555555555555555555555555555555555555fffffffff5555555555555555555
    55555555555555555555555555555555555555555555555555555555555555555555555fffffffff5555555555555555555555555555555555555555555555555555fffffffff5555555555555555555
    55555555555555555555555555555555555555555555555555555555555555555555555fffffffff5555555555555555555555555555555555555555555555555555fffffffff5555555555555555555
    55555555555555555555555555555555555555555555555555555555555555555555555fffffffff5555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffff
    55555555555555555555555555555555555555555555555555555555555555555555555fffffffff5555555555555555555555555555555555555555555555555555ffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
music.play(music.createSong(hex`00780004080f0a00001c00010a006400f401640000040000000000000000000000000005000004260084008800041922272a88008c000125900094000319202a94009800021b259c00a000031b222901001c000f05001202c102c201000405002800000064002800031400060200043500e000e400012ae400e800021d24e800ec00022527ec00f000021b24f000f4000124f400f800021b25f800fc00011efc00000102202902001c000c960064006d019001000478002c010000640032000000000a0600056100c400c80006191d2022252ac800cc00022025cc00d0000129d000d40003191e25d400d8000322272cd800dc00021e29dc00e000031b252a84018801011b88018c01021e298c019001021b249401980102192298019c0101259c01a001041d20272903001c0001dc00690000045e01000400000000000000000000056400010400037600000004000119040008000320272c08000c00031922270c00100002272c1000140003191e271400180002242918001c00011b1c002000041920272c20002400011da401a801041d22252aa801ac01011eac01b001022427b001b401021e2cb401b801031b2229b801bc01022022bc01c00104191b252c04001c00100500640000041e000004000000000000000000000000000a040004a500a000a400011ba400a80002222aa800ac0003192229ac00b00003191e27b000b4000125b400b800031b2027bc00c00004191e252a6001640101196401680102202a68016c010219206c017001012570017401021b2974017801021e2978017c010219297c018001051b1d242529c001c4010129c401c80103191b24c801cc0102222acc01d0010129d001d4010419202527d401d801011bd801dc010122dc01e001031b242905001c000f0a006400f4010a0000040000000000000000000000000000000002460020012401012224012801041b1e272a28012c010219272c013001041b22272c30013401021b2934013801031e222738013c0102192a3c014001041d222a2c40014401031e252706001c00010a006400f4016400000400000000000000000000000000000000023600440048000320292a48004c0001244c0050000419202429500054000222295400580003191e2458005c00021d295c006000041b22252907001c00020a006400f40164000004000000000000000000000000000000000331006400680002192468006c00021d276c00700002292a700074000319222574007800012478007c00031b222a7c008000012408001c000e050046006603320000040a002d00000064001400013200020100023d0000010401011e040108010319242908010c01031e25270c011001011910011401041920252a1401180102192218011c0104191d272a1c0120010319222709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800700024002500040306080a28002900030104082c002d000400040709300031000105340035000401040709380039000205093c003d00020106440145010300010a48014901030304074c014d0103010509500151010300050854015501030104075801590104000104075c015d010301090a`), music.PlaybackMode.LoopingInBackground)
info.setScore(0)
info.changeScoreBy(1)
mySprite.setPosition(10, 11)
mySprite.startEffect(effects.hearts)
