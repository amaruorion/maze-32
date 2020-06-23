enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Spinning
}
namespace SpriteKind {
    export const chest = SpriteKind.create()
    export const blocker = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const asdasdasdasd_sadasdasda_sdaoisdasiodnasoid_dsandoiasdnioasndoiasdnoai_oiasdnoaisdnoaisndo_asdnoaisdnaiosdn_ndoiasndisoandoiasd = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
b d d d d d d d d d d d d d d c 
d b b b b b b 8 8 b b b b b b c 
d b 8 b b b 8 8 8 8 b b b 8 b c 
d 8 8 8 b 8 8 8 8 8 8 b 8 8 8 c 
d 8 8 8 8 8 1 8 8 1 8 8 8 8 8 c 
d b 8 8 8 8 f 8 8 f 8 8 8 8 b c 
d b b 8 8 8 8 8 8 8 8 8 8 b b c 
d b b b 8 8 8 8 8 8 8 8 b b b c 
d b b b b 8 8 8 8 8 8 b b b b c 
d b b b b b 8 8 8 8 b b b b b c 
d b b b b b 8 8 8 8 b b b b b c 
d b b b b b b 8 8 b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
d b b b b b b b b b b b b b b c 
c c c c c c c c c c c c c c c c 
`
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(il == 0)) {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . 6 6 6 5 5 6 6 6 . . . . 
. . . 7 7 7 7 6 6 6 6 6 6 . . . 
. . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
. . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
. 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
. 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
. 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
. 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
. . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
. . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
. . . 6 8 8 8 8 8 8 8 8 6 . . . 
. . . . 6 6 8 8 8 8 6 6 . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 0, 0)
        projectile.follow(mySprite5, 10)
        il += -1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.chest, function (sprite, otherSprite) {
    winner = sprites.create(img`
. b b b b b b b b b b b b b b . 
b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e e 4 4 4 4 4 4 4 4 4 4 e e b 
b b b b b b b d d b b b b b b b 
. b b b b b b c c b b b b b b . 
b c c c c c b c c b c c c c c b 
b c c c c c c b b c c c c c c b 
b c c c c c c c c c c c c c c b 
b c c c c c c c c c c c c c c b 
b b b b b b b b b b b b b b b b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b c e e e e e e e e e e e e c b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`, SpriteKind.chest)
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 100)
    info.changeScoreBy(1)
    music.baDing.playUntilDone()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (yiotireoirjioansioshduasdbjkasbdhkasjdbjakwdbakjsbdksjadbkajsbduiwhqouwoigzuxuyvruoeeeeeeeeeeeeeeeeeeeeeeeeeevyvyvyvyvyeuozvuoyvuveuouooooooooooooooooooooeuwyogzevfyoUaaaaaaaaaeeeeeeeeeeeeeeeeesadaewdwaeafr == 0) {
        mySprite5.destroy()
    } else {
        yiotireoirjioansioshduasdbjkasbdhkasjdbjakwdbakjsbdksjadbkajsbduiwhqouwoigzuxuyvruoeeeeeeeeeeeeeeeeeeeeeeeeeevyvyvyvyvyeuozvuoyvuveuouooooooooooooooooooooeuwyogzevfyoUaaaaaaaaaeeeeeeeeeeeeeeeeesadaewdwaeafr += -1
        tiles.placeOnTile(mySprite5, tiles.getTileLocation(15, 21))
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say("For pros")
    info.startCountdown(30)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let projectile: Sprite = null
let yiotireoirjioansioshduasdbjkasbdhkasjdbjakwdbakjsbdksjadbkajsbduiwhqouwoigzuxuyvruoeeeeeeeeeeeeeeeeeeeeeeeeeevyvyvyvyvyeuozvuoyvuveuouooooooooooooooooooooeuwyogzevfyoUaaaaaaaaaeeeeeeeeeeeeeeeeesadaewdwaeafr = 0
let mySprite5: Sprite = null
let winner: Sprite = null
let mySprite: Sprite = null
let il = 0
scene.setBackgroundColor(2)
tiles.setTilemap(tiles.createTilemap(
            hex`20002000030303030303030303030303030303030303030303030303030303030303030303040404040404040304040404040403040404040404040404040403040404030303030404040404030404040404040304040404040303030404040304040403030404040404040403040404040404030404040404030403040404030404040303040404040404040304040404040c03040403030303040304040403040404030304040403030404030404040404040304040304040404030303030304040403030404030403040403040404040404030404030404040404040404040404040303040304040304040303030303030303040403030304040303030303040404030304030304030404040404040404040404040404040404030404040304040403030404040403040404040404040303030403030303030303040404030404040303030303030304040404040303030403040304040404040404030303040304030304040404040404040403030404040304030404040404040403040404030403030404040404040403040304040404030403040403030303030304040304040303040404040404030304030404030303040303040304040404040404030404030303030303030303030403040403040404040304030303030303030303030403030404040303040403040304030404040604030404030404040404040403040303040403040403040304030303030404040403040403040403030303030304030304030404040403030404040303030403030304040304040304040404030403030304040404040303040303030403040404040404030404030404040403040303030404040403040304030404030404030404040304040403030404040303030304030404030404030403040304040303040403040404030404030404040403030403040403040403040303040403040404040404040304040404030403030303040403040403040304040304040403040404040404030404040304040403030304040304040403040403040404040403030d0303040403040304040403040303040404030404030403040404040403030404040403040403030404040304030304040403040404030404040303030404040404040403040404040404030403030404030404040404040404030304040404040404040403040404040303040303040304040404040404030304040303040404040404040303030303030304030304040304040404030304040404040304040404040404030404040404040403030404040304030304040404040404030404040404040403040404040404040303040404040304040404040404040403040404040404040304040404040404030303030303030303030303030303030303030303030303030303030303030303`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . 2 . . . . . . 2 . . . . . . . . . . . 2 . . . 2 
2 2 2 . . . . . 2 . . . . . . 2 . . . . . 2 2 2 . . . 2 . . . 2 
2 . . . . . . . 2 . . . . . . 2 . . . . . 2 . 2 . . . 2 . . . 2 
2 . . . . . . . 2 . . . . . . 2 . . 2 2 2 2 . 2 . . . 2 . . . 2 
2 . . . 2 2 . . 2 . . . . . . 2 . . 2 . . . . 2 2 2 2 2 . . . 2 
2 . . 2 . 2 . . 2 . . . . . . 2 . . 2 . . . . . . . . . . . . 2 
2 . 2 . . 2 . . 2 2 2 2 2 2 2 2 . . 2 2 2 . . 2 2 2 2 2 . . . 2 
2 . 2 2 . 2 . . . . . . . . . . . . . . . . . 2 . . . 2 . . . 2 
2 . . . . 2 . . . . . . . 2 2 2 . 2 2 2 2 2 2 2 . . . 2 . . . 2 
2 2 2 2 2 2 . . . . . 2 2 2 . 2 . 2 . . . . . . . 2 2 2 . 2 . 2 
2 . . . . . . . . . 2 2 . . . 2 . 2 . . . . . . . 2 . . . 2 . 2 
2 . . . . . . . 2 . 2 . . . . 2 . 2 . . 2 2 2 2 2 2 . . 2 . . 2 
2 . . . . . . 2 2 . 2 . . 2 2 2 . 2 2 . 2 . . . . . . . 2 . . 2 
2 2 2 2 2 2 2 2 2 . 2 . . 2 . . . . 2 . 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . 2 2 . . 2 . 2 . 2 . . . . . 2 . . 2 . . . . . . . 2 . 2 
2 . . 2 . . 2 . 2 . 2 2 2 2 . . . . 2 . . 2 . . 2 2 2 2 2 2 . 2 
2 . 2 . . . . 2 2 . . . 2 2 2 . 2 2 2 . . 2 . . 2 . . . . 2 . 2 
2 2 . . . . . 2 2 . 2 2 2 . 2 . . . . . . 2 . . 2 . . . . 2 . 2 
2 2 . . . . 2 . 2 . 2 . . 2 . . 2 . . . 2 . . . 2 2 . . . 2 2 2 
2 . 2 . . 2 . . 2 . 2 . 2 . . 2 2 . . 2 . . . 2 . . 2 . . . . 2 
2 . 2 . . 2 . . 2 . 2 2 . . 2 . . . . . . . 2 . . . . 2 . 2 2 2 
2 . . 2 . . 2 . 2 . . 2 . . . 2 . . . . . . 2 . . . 2 . . . 2 2 
2 . . 2 . . . 2 . . 2 . . . . . 2 2 . 2 2 . . 2 . 2 . . . 2 . 2 
2 . . . 2 . . 2 . 2 . . . . . 2 2 . . . . 2 . . 2 2 . . . 2 . 2 
2 . . . 2 . . . 2 . . . 2 2 2 . . . . . . . 2 . . . . . . 2 . 2 
2 . . 2 . . . . . . . . 2 2 . . . . . . . . . 2 . . . . 2 2 . 2 
2 . 2 . . . . . . . 2 2 . . 2 2 . . . . . . . 2 2 2 2 2 2 2 . 2 
2 . . 2 . . . . 2 2 . . . . . 2 . . . . . . . 2 . . . . . . . 2 
2 . . . 2 . 2 2 . . . . . . . 2 . . . . . . . 2 . . . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 . . . . . . . 2 . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.builtin.forestTiles0,sprites.castle.tilePath9,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,sprites.dungeon.floorLight0,sprites.dungeon.doorLockedNorth,sprites.castle.rock0,sprites.builtin.brick,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleInsignia,myTiles.tile1],
            TileScale.Sixteen
        ))
info.setScore(0)
il = 7
mySprite = sprites.create(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`, SpriteKind.Player)
winner = sprites.create(img`
. . b b b b b b b b b b b b . . 
. b e 4 4 4 4 4 4 4 4 4 4 e b . 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e e 4 4 4 4 4 4 4 4 4 4 e e b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b b b b b b b d d b b b b b b b 
c b b b b b b c c b b b b b b c 
c c c c c c b c c b c c c c c c 
b e e e e e c b b c e e e e e b 
b e e e e e e e e e e e e e e b 
b c e e e e e e e e e e e e c b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`, SpriteKind.chest)
let mySprite2 = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.Food)
let mySprite3 = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.Food)
let mySprite4 = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.Food)
mySprite5 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorLockedNorth)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(winner, tiles.getTileLocation(20, 30))
tiles.placeOnTile(mySprite2, tiles.getTileLocation(4, 18))
tiles.placeOnTile(mySprite3, tiles.getTileLocation(25, 8))
tiles.placeOnTile(mySprite4, tiles.getTileLocation(30, 20))
tiles.placeOnTile(mySprite5, tiles.getTileLocation(15, 21))
tiles.setWallAt(tiles.getTileLocation(18, 23), true)
yiotireoirjioansioshduasdbjkasbdhkasjdbjakwdbakjsbdksjadbkajsbduiwhqouwoigzuxuyvruoeeeeeeeeeeeeeeeeeeeeeeeeeevyvyvyvyvyeuozvuoyvuveuouooooooooooooooooooooeuwyogzevfyoUaaaaaaaaaeeeeeeeeeeeeeeeeesadaewdwaeafr = 5
game.onUpdateInterval(2000, function () {
    mySprite5.setFlag(SpriteFlag.StayInScreen, false)
    mySprite5.follow(mySprite, 10)
})
forever(function () {
    if (!(mySprite.overlapsWith(winner))) {
        music.playMelody("F E D E A G F G ", 300)
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, myTiles.tile1)) {
        mySprite.say("Did you get all three coins?", 2000)
        if (info.score() == 3) {
            mySprite.say("Yay! You did!", 500)
        }
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, myTiles.tile1)) {
        if (info.score() == 3) {
            mySprite.say("Yay! You did!", 500)
            tiles.setWallAt(tiles.getTileLocation(18, 23), false)
            mySprite6 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 5 . . 2 . 5 . . 2 . 5 . 5 . . . . . . . . . . . 
. . . . . . . . 5 4 5 4 4 4 4 4 4 4 5 2 5 . . . . . . . . . . . 
. . . . . . . . 2 5 4 2 5 2 2 2 2 2 4 5 2 . . . . . . . . . . . 
. . . . . . . . 5 4 2 f f 2 5 2 2 f f 4 5 . . . . . . . . . . . 
. . . . . . . . 4 2 2 2 f f 2 2 f f 2 2 4 . . . . . . . . . . . 
. . . . . . . . 4 5 2 5 2 1 2 2 1 2 2 2 4 . . . . . . . . . . . 
. . . . . . . . 4 2 2 2 2 2 2 3 3 2 2 5 4 . . . . . . . . . . . 
. . . . . . . . 4 3 2 3 3 2 2 2 2 2 2 2 4 . . . . . . . . . . . 
. . . . . . . . 4 3 3 3 2 f f f 2 5 2 2 4 . . . . . . . . . . . 
. . . . . . . . 4 2 2 3 3 f f f 2 2 4 2 4 . . . . . . . . . . . 
. . . . . . . . 4 2 4 4 2 f f f 2 4 2 2 4 . . . . . . . . . . . 
. . . . . . . . . 4 2 4 2 2 2 4 2 4 2 4 . . . . . . . . . . . . 
. . . . . . . . . . 4 2 4 4 4 2 2 2 4 . . . . . . . . . . . . . 
. . . . . . . . . . . 4 4 4 4 4 4 4 . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 5 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . 4 4 5 4 2 3 2 4 3 3 4 . . . . . . . . . . . . 
. . . . . . . . . 5 4 4 4 2 2 2 4 3 3 4 . . . . . . . . . . . . 
. . . . . . . . . . . . 5 2 5 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 2 5 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 5 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 3 2 2 3 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 3 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 5 5 . 5 5 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 5 4 . 5 5 . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 4 2 5 . 2 5 2 3 . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 4 2 . 2 2 5 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Boss)
            mySprite7 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . 2 
4 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 . . . . . 2 
4 4 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 
4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 
4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 2 2 2 2 2 2 2 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 
5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 4 4 4 4 4 5 4 4 4 4 4 4 4 4 4 4 4 
5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 
5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`, SpriteKind.asdasdasdasd_sadasdasda_sdaoisdasiodnasoid_dsandoiasdnioasndoiasdnoai_oiasdnoaisdnoaisndo_asdnoaisdnaiosdn_ndoiasndisoandoiasd)
            il = 10
            tiles.placeOnTile(mySprite6, tiles.getTileLocation(18, 27))
            tiles.placeOnTile(mySprite7, tiles.getTileLocation(19, 29))
        }
    }
})
