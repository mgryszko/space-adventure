namespace SpriteKind {
    export const mouseKind = SpriteKind.create()
    export const startKind = SpriteKind.create()
    export const marsButtonkind = SpriteKind.create()
    export const rockColKind = SpriteKind.create()
    export const rocketKind = SpriteKind.create()
    export const bigRocketKind = SpriteKind.create()
    export const miniRocketMars = SpriteKind.create()
    export const creativeKind = SpriteKind.create()
}
namespace StatusBarKind {
    export const RocksLMarsKind = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.rocketKind, assets.tile`myTile0`, function (sprite, location) {
    info.stopCountdown()
    game.showLongText("Why have you given up?", DialogLayout.Full)
    game.gameOver(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (astronaut) {
        astronautDirection = 2
        animation.runImageAnimation(
        astronaut,
        [img`
            . . . . f f f f f f f f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . e 1 1 1 1 1 1 1 1 f . . . 
            . . . . e e f f f f f f . . . . 
            . . . . . f e e e e f . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . f f f e e e e f f f . . . 
            . . . f . f e e e e f . f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . e 1 1 1 1 1 1 1 1 f . . . 
            . . . . e e f f f f f f . . . . 
            . . . . . f e e e e f . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . f f f e e e e f f f . . . 
            . . . f . f e e e e f . f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . . . . . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . e 1 1 1 1 1 1 1 1 f . . . 
            . . . . e e f f f f f f . . . . 
            . . . . . f e e e e f . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . f f f e e e e f f f . . . 
            . . . f . f e e e e f . f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . e 1 1 1 1 1 1 1 1 f . . . 
            . . . . e e f f f f f f . . . . 
            . . . . . f e e e e f . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . f f f e e e e f f f . . . 
            . . . f . f e e e e f . f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . . . . f . . . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . e 1 1 1 1 1 1 1 1 f . . . 
            . . . . e e f f f f f f . . . . 
            . . . . . f e e e e f . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . f f f e e e e f f f . . . 
            . . . f . f e e e e f . f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . f . . . . . . 
            . . . . . . . . . f . . . . . . 
            . . . . . . . . . f . . . . . . 
            `],
        80,
        true
        )
    }
})
function changeEngine (newEngineImage: Image, newEnginePlace: number) {
    sprites.destroy(engine)
    engine = sprites.create(newEngineImage, SpriteKind.Player)
    engine.setPosition(76, 101)
    enginePlace = newEnginePlace
    pause(200)
}
sprites.onOverlap(SpriteKind.mouseKind, SpriteKind.startKind, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(Menu)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        game.showLongText("You are the director of the space agency ÑASA. Choose an objective.", DialogLayout.Full)
        marsButton = sprites.create(img`
            1 . . . . . 1 . . . . 1 . . . . . 1 1 1 . . . . 1 1 1 . . . 
            1 1 . . . 1 1 . . . 1 . 1 . . . 1 . . . 1 . . 1 . . . . . . 
            1 . 1 . 1 . 1 . . . 1 . 1 . . . 1 . . . 1 . . 1 . . . . . . 
            1 . 1 . 1 . 1 . . 1 . . . 1 . . 1 . . . 1 . . 1 . . . . . . 
            1 . . 1 . . 1 . . 1 . . . 1 . . 1 1 1 1 . . . . 1 1 . . . . 
            1 . . . . . 1 . . 1 1 1 . 1 . . 1 1 . . . . . . . . 1 . . . 
            1 . . . . . 1 . . 1 . 1 1 1 . . 1 . 1 . . . . . . . 1 . . . 
            1 . . . . . 1 . . 1 . . . 1 . . 1 . . 1 . . . . . . 1 . . . 
            1 . . . . . 1 . . 1 . . . 1 . . 1 . . 1 . . . . . . 1 . . . 
            1 . . . . . 1 . . 1 . . . 1 . . 1 . . 1 . . . 1 1 1 . . . . 
            `, SpriteKind.marsButtonkind)
        marsButton.setPosition(25, 54)
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
    }
})
function changeBody (newBodyImage: Image, newBodyPlace: number) {
    sprites.destroy(body)
    body = sprites.create(newBodyImage, SpriteKind.Player)
    body.setPosition(76, 61)
    bodyPlace = newBodyPlace
    pause(200)
}
sprites.onOverlap(SpriteKind.mouseKind, SpriteKind.marsButtonkind, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(marsButton)
        mouse.setPosition(68, 98)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        game.showLongText("Now choose a mission", DialogLayout.Full)
        rockCollectionButton = sprites.create(img`
            111....111....111..1..1......111...111...1....1....1111...111..11111..1...111...1...1
            1..1..1...1..1.....1.1......1.....1...1..1....1....1.....1.......1....1..1...1..1...1
            1..1..1...1..1.....1.1......1.....1...1..1....1....1.....1.......1....1..1...1..11..1
            1..1..1...1..1.....1.1......1.....1...1..1....1....1.....1.......1....1..1...1..1.1.1
            111...1...1..1.....11.......1.....1...1..1....1....111...1.......1....1..1...1..1.1.1
            11....1...1..1.....1.1......1.....1...1..1....1....1.....1.......1....1..1...1..1.1.1
            1.1...1...1..1.....1.1......1.....1...1..1....1....1.....1.......1....1..1...1..1..11
            1.1...1...1..1.....1.1......1.....1...1..1....1....1.....1.......1....1..1...1..1...1
            1..1..1...1..1.....1.1......1.....1...1..1....1....1.....1.......1....1..1...1..1...1
            1..1...111....111..1..1......111...111...111..111..1111...111....1....1...111...1...1
            `, SpriteKind.rockColKind)
        rockCollectionButton.setPosition(72, 56)
        creativeModeButton = sprites.create(img`
            ..1111..1111.....11111....11.....1111111..1..1....1..11111...........1.....1....11111...1111....11111
            .1......1...1....1.......111........1.....1..1...11..1...............11...11...1.....1..1..11...1....
            .1......1...1....1.......1.1........1.....1..1...1...1...............1.1.1.1...1.....1..1...1...1....
            .1......1...1....1.......1.1........1.....1..1...1...1...............1.1.1.1...1.....1..1...1...1....
            .1......1..11....111.....1..1.......1.....1..11..1...111.............1..1..1...1.....1..1...1...111..
            .1......111......1.......1111.......1.....1...1.1....1...............1.....1...1.....1..1...1...1....
            .1......1.11.....1......1...1.......1.....1...1.1....1...............1.....1...1.....1..1...1...1....
            .1......1..1.....1......1....1......1.....1...1.1....1...............1.....1...1.....1..1...1...1....
            .1......1..1.....1......1....1......1.....1....11....1...............1.....1...1.....1..1..11...1....
            ..1111..1...1....11111..1....1......1.....1....1.....11111...........1.....1....11111...1111....11111
            `, SpriteKind.creativeKind)
        creativeModeButton.setPosition(72, 80)
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
            ffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
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
            `)
    }
})
sprites.onOverlap(SpriteKind.mouseKind, SpriteKind.rockColKind, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(rockCollectionButton)
        sprites.destroy(mouse)
        sprites.destroy(creativeModeButton)
        marsMode = 1
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        engine = sprites.create(img`
            .cccceeeeeebbbeeeeeeeeeeeefc..
            ..cccddeeebbbbbeeee4eee4eeccc.
            ...cdd4cbbbbbbb4444ebbb4ecccc.
            ..dddddbbbbbbbbeeeeebb4bccccc.
            ..ddddbbbbbbbbcccceeb44bccccc.
            .ddddbbbbbbbbcccccccb4bbccc...
            c4444ccbbbbbb44ccddccbbbbbf...
            cccc4ccebbbe4ccdddddebbbbbf...
            ccc4cceeeeeeeccddddddbbbbbb...
            ccc4cceeeeeeeccddddddbbbbbbbbb
            ..c4ceeeeeeeeccddddddbbbbbbbbb
            ..c4eeeeeeeeeeeeddddddeeeebbbb
            ..f4eee444eeebbbedddeeeeeebbbb
            ..feeeeeee4fbbbbbddeeee444bbbb
            ..feeeeccc44bbbbbbbee44eeebbbb
            .feeececccc..bbbbbbf4e44eebbbb
            .fddd44cccc...bbbbb.fee44eeef.
            .fdddddcccc....bbb..feee4eeef.
            feedddd4cc...........feeeeeeef
            ffffffff..............ffffffff
            `, SpriteKind.Player)
        engine.setPosition(76, 101)
        body = sprites.create(img`
            feeeeeeeeeeeeeeeeeeeebbbbbfb
            feeeeeddeeeeeeeeeeeeeebbbbbf
            feeeeeddddddeeeeeeeeeebbbbbf
            feeeeeddddddddeeeeeeeebbbbbf
            feeeeeddddddddeeeeeeeeebeebf
            feeeeeddddddd44eeeeeeccceeef
            feeeeee44ddd44444eecccccceef
            feeeeee44444444444ccccccceef
            feeeeee4444444444cccccccceef
            feeeee4444444444ccccccccceef
            feeeee444444444ccccccccceeef
            feeee4444444444cccccccceeeef
            feeee4444444444ccccccceeeeef
            feee.4444444444ccccccceeeeef
            fee...444444444ccccccbeeeeef
            f.....4444444bbbcccccbbeeeef
            f.....44444bbbbbbccccbbbeeef
            f......444bbbbbbbbbcbbbbbeef
            f......44bbbbbbbbbbbbbbbbeef
            f.....444bbbbbbbbbbbbbbbbeef
            f.....eeeeeebbbbbbbbbbbbbeef
            f.....eeeeeeeeebbbbbbbbbeeef
            fee.eeeeeeeeeeeeeebbbbbbeeef
            feeeeeeeddeeeeeeeeeebbbbeeef
            feeeeedddddeeeeeeeeeeeeeeeef
            feee4ddddddeeeeeeeeeeeeeeeef
            fee44ddddddeeeeeeeeeeeeeeebf
            fe4444dddddeeee..eeeeeeebbbf
            fe4444dddddeee.....eeebbbbbf
            fe44444ddddeee......bbbbbbbf
            f444444dddddee......ebbbbbbf
            f4444444ddddeee......bbbbbbf
            f4444444ddddeeee.....ebbbbbf
            f4444444eeeeeeee....eebbbbbf
            f4444444eeeeeeeeee..eebbbbbf
            f4444444bbbbeeeeeeeeeebbbbef
            feebbbbbbbbbeeeeeeeeeebbddef
            feebbbbbbbbbbeeeeeeeeddddddf
            feebbbbbbbbbbbeeeeeedddddddf
            febbbbbbbbbbcbeeeedddddddddf
            febbbbbbbcccccceeeddddddddef
            febbbbbbccccccceeeeddddddeef
            fbbbbbbccccccccceeeeeddddeef
            fbbbbbbccccccccceeeeeddddeef
            febbbbcbccccccccceeeeeeddeef
            feeebeccccccccccceeeeeeedeef
            feeeeccccccccccccceeeeeeeeef
            feeeecccccccccccccceeeeeeeef
            feeeecccccccccccccceeeeeeeef
            feeeeccccccccccccccceeeeeeef
            feeeeecc4444444ccceeeeeee44f
            feeeeee4444444444eeeeeee444f
            feeeee44444444444eeeee44444f
            feeeee44444444444eeeee44444f
            feeeee44444444444eeee444444f
            feeeee4444444444eeeee444444f
            feeee4444444444eeeee4444444f
            feeee444444444eeeeee4444444f
            feeeeee4444eeeeeeeee4444444f
            feeeeeeeeeeeeeeeeeee4444444f
            `, SpriteKind.Player)
        body.setPosition(76, 61)
        tip = sprites.create(img`
            ...........................
            .............f..ffffff.....
            ..........f.feffbbbbbf.....
            .......fffcfeeeebbbbbf.....
            .....ffccccfeeeebbbbbf.....
            .....fcccccceeeebbbbbf.....
            .....fcccccceeebbbbbbf.....
            .....fcccccceeddbbbbbf.....
            .....fccccccdddddbbbbf.....
            .....fcccccdddddddbbbf.....
            ...fffccccedddddddeeff.....
            ...fbbcccceddddddddef......
            ...fbbbbbeedddddddddff.....
            ...fbbbbbeeedddddddddf.....
            ...fbbbbbeeedddddddddff.fff
            ffffbbbbbeee44ddddddeefff4f
            f44ebbbbbeee44ddddeeeeee44f
            f444bbbbbe44444eeeeeee4444f
            f4444eee4444444eeeeeee4444f
            f4444eee4444444eeeeeeeee44f
            f4444eee4444444eeeeeeeee44f
            f44eeeeee444444eeeeeeeeeeef
            feeeeeeee44eeeeeeeeeeeeeeef
            `, SpriteKind.Player)
        tip.setPosition(76, 20)
        enginePlace = 1
        bodyPlace = 1
        tipPlace = 1
        selectPlace = ENGINE_SELECTION
        arrows = sprites.create(img`
            .f....................................................................
            .ff..................................................................f
            ..f.................................................................f.
            ...ff..............................................................ff.
            ....f.............................................................f...
            .....ff..........................................................ff...
            ......fff........................................................f....
            ........ff......................................................f.....
            ........ff.....................................................ff.....
            ........f.....................................................ff......
            .......f......................................................ff......
            .....ff........................................................fff....
            ....f............................................................f....
            ...ff............................................................ff...
            ..ff..............................................................fff.
            .f..................................................................ff
            `, SpriteKind.Player)
        arrows.setPosition(76, 101)
        game.showLongText("Build a rocket to reach your objective", DialogLayout.Full)
        scene.setBackgroundImage(img`
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            99999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddd99999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddd99999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddd9999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
            99999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddd9999999999999999999999999999999999999999999999999999999999999999999999
            99999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddd9999999999999999999999999999999999999999999999999999999999dddddddddd99
            dd999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd99999999999999999999999999999999999999999999999999999999ddddddddddddd
            ddddd999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9999999999999999999999999999999999999999999999999999999dddddddddddddd
            dddddd99999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9999999999999999999999999999999999999999999999999999999dddddddddddddd
            ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9999999999999999999999999999999999999999999999999999999dddddddddddddd
            ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd999999999999999999999999999999999999999999999999ddddddddddddddddddddd
            ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd99999999999999999999999999999999999999999999999dddddddddddddddddddddd
            ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddd999999999999999999999999999999999999999999999ddddddddddddddddddddddd
            ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddd999999999999999999999999999999999999999999999ddddddddddddddddddddddd
            ddddddd999999999999999999999999999999999ddd9999999999999999999999999999999999999999ddddddddd999999999999999999999999999999999999999999999dd7777777777777dddddddd
            ddddddd999999999999999999999999999999ddddddd999999999999999999999999999999999999999dddddddddd999999999999999999999999999999999999999977777777777777777777ddddddd
            ddddddd9999999999999999999999999999ddddddddd999999999999999999999999999999999999999dddddddddd9999999999999999999999999999999999999777777777777777777777777dddddd
            ddddddd99999999999999999999999999dddddddddddd99999999999999999999999999999999999999ddddddddddd999999999999977777777777777777777777777777777777777777777777dddddd
            ddddddd9999999999999999999999999ddddddddddddd9999999999999999999999999999999999999dddddddddddd977777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd999999999999999999999999dddddddddddddd999999999999999999999999999999999999ddddddddddddd977777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd999999999997999999999999dddddddddddddd999999999999999999999999999999999999ddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd999997777777799999999999dddddddddddddd999999999999999999999999dd999999999dddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd997777777777799999999999ddddddddddddddd9999999999999999999999ddddddd9999ddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd77777777777779999999999dddddddddddddddd999999999999999999999dddddddddd99ddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd77777777777779999999999dddddddddddddddd999999999999999999999ddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd77777777777777999999999dddddddddddddddd999999999999999999999ddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
            ddddd7777777777777777999999999dddddddddddddddd99999999999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
            dddd77777777777777777999999ddddddddddddddddddd99999999999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
            dddd77777777777777777ddddddddddddddddddddddddd99ddd999999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
            ddd777777777777777777ddddddddddddddddddddddddd99dddd99999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
            ddd777777777777777777dddddddddddddddddddddddddddddddd9999999999999dddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777ddddd
            dd7777777777777777777ddddddddddddddddddddddddddddddddd999999999999dddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777ddddd
            dd7777777777777777777ddddddddddddddddddddddddddddddddd99999999999ddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777ddddd
            d77777777777777777777ddddddddddddddddddddddddddddddddd99999999999dddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777ddddd
            d77777777777777777777ddddddddddddddddddddddddddddddddd99999999999ddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777dddd
            d77777777777777777777dddddddddddd77777dddddddddddddddd99999999999dddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777dddd
            7777777777777777777777ddddddddddd7777777dddddddddddddd99999999999ddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777dddddddddd77777777dddddddddddddd9999999999dddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777ddddddd77777777777dddddddddddddddddddddd9dddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777dddd777777777777dddddddddddddddddddddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777dddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            777777777777777777777777777777777777777777777777777dddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777dddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777dddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777dddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (astronaut) {
        animation.stopAnimation(animation.AnimationTypes.All, astronaut)
        astronaut.setImage(img`
            . . . . f f f f f f f f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 9 9 9 9 9 9 1 f . . . 
            . . . f 9 9 9 9 9 9 9 9 f . . . 
            . . . f 1 9 9 9 9 9 9 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . f f f f f f f f . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f b b 1 1 f . . . . . 
            . . . f f f 1 1 c 1 f f f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            `)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (astronaut) {
        astronautDirection = 1
        animation.runImageAnimation(
        astronaut,
        [img`
            . . . . f f f f f f f . . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . f 9 9 9 9 9 9 1 f . . . . 
            . . . f 9 9 9 9 9 9 9 f . . . . 
            . . . f 9 9 9 9 9 9 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f b b 1 1 f . . f . . 
            . . . f f f 1 1 c 1 f f f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f f . . f . . . . . . 
            . . . . . f . . f . . . . . . . 
            . . . . . f . . . f . . . . . . 
            `,img`
            . . . . f f f f f f f . . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . f 9 9 9 9 9 9 1 f . . . . 
            . . . f 9 9 9 9 9 9 9 f . . . . 
            . . . f 9 9 9 9 9 9 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f b b 1 1 f . . f . . 
            . . . f f f 1 1 c 1 f f f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f . f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            `,img`
            . . . . f f f f f f f . . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . f 9 9 9 9 9 9 1 f . . . . 
            . . . f 9 9 9 9 9 9 9 f . . . . 
            . . . f 9 9 9 9 9 9 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f b b 1 1 f . . f . . 
            . . . f f f 1 1 c 1 f f f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f . f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            `,img`
            . . . . f f f f f f f . . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . f 9 9 9 9 9 9 1 f . . . . 
            . . . f 9 9 9 9 9 9 9 f . . . . 
            . . . f 9 9 9 9 9 9 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f b b 1 1 f . . f . . 
            . . . f f f 1 1 c 1 f f f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f . f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f . . f . . . . . . 
            `],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.rocketKind, assets.tile`myTile1`, function (sprite, location) {
    info.stopCountdown()
    scene.cameraShake(6, 1000)
    game.showLongText("Finally there!", DialogLayout.Full)
    selectPlace = ON_MARS
    sprites.destroy(rocket)
    if (marsMode == 1) {
        tiles.setCurrentTilemap(tilemap`level3`)
        scene.setBackgroundColor(4)
        game.splash("collect all the rocks found in this valley.")
        astronaut = sprites.create(img`
            . . . . f f f f f f f f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 9 9 9 9 9 9 1 f . . . 
            . . . f 9 9 9 9 9 9 9 9 f . . . 
            . . . f 1 9 9 9 9 9 9 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . f f f f f f f f . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f b b 1 1 f . . . . . 
            . . . f f f 1 1 c 1 f f f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            `, SpriteKind.Player)
        astronaut.setPosition(82, 11)
        scene.setBackgroundColor(4)
        controller.moveSprite(astronaut, 50, 50)
        scene.cameraFollowSprite(astronaut)
        rocksLeftinMars = statusbars.create(50, 5, StatusBarKind.RocksLMarsKind)
        rocksLeftinMars.max = 35
        rocksLeftinMars.value = 35
        rocksLeftinMars.setLabel("Rocks")
        rocksLeftinMars.positionDirection(CollisionDirection.Top)
    } else {
        tiles.setCurrentTilemap(tilemap`level3`)
        scene.setBackgroundColor(4)
        game.splash("Lets build!")
        astronaut = sprites.create(img`
            . . . . f f f f f f f f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 9 9 9 9 9 9 1 f . . . 
            . . . f 9 9 9 9 9 9 9 9 f . . . 
            . . . f 1 9 9 9 9 9 9 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . f f f f f f f f . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f b b 1 1 f . . . . . 
            . . . f f f 1 1 c 1 f f f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            `, SpriteKind.Player)
        controller.moveSprite(astronaut, 50, 50)
        scene.cameraFollowSprite(astronaut)
    }
})
function changeTip (newTipImage: Image, newTipPlace: number) {
    sprites.destroy(tip)
    tip = sprites.create(newTipImage, SpriteKind.Player)
    tip.setPosition(76, 20)
    tipPlace = newTipPlace
    pause(200)
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (astronaut) {
        animation.stopAnimation(animation.AnimationTypes.All, astronaut)
        astronaut.setImage(img`
            . . . . . f f f f f f f . . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 9 9 9 9 9 9 f . . . 
            . . . . f 9 9 9 9 9 9 9 f . . . 
            . . . . f 1 9 9 9 9 9 9 f . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 b b f . . . . . 
            . . . f f f 1 c 1 1 f f f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            `)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (astronaut) {
        animation.stopAnimation(animation.AnimationTypes.All, astronaut)
        astronaut.setImage(img`
            . . . . f f f f f f f . . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . f 9 9 9 9 9 9 1 f . . . . 
            . . . f 9 9 9 9 9 9 9 f . . . . 
            . . . f 9 9 9 9 9 9 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f b b 1 1 f . . . . . 
            . . . f f f 1 1 c 1 f f f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            `)
    }
})
statusbars.onZero(StatusBarKind.RocksLMarsKind, function (status) {
    game.showLongText("Find the rocket. Beware of Juanito, the alien!!", DialogLayout.Full)
    tiles.setCurrentTilemap(tilemap`level4`)
    sprites.destroy(rocksLeftinMars)
    Juanito = sprites.create(img`
        . 7 7 . . . . . . . . 7 7 
        7 . 7 7 . . . . . . 7 . 7 
        7 . . 7 7 7 f 7 f 7 7 . . 
        . . . 7 7 7 7 f 7 7 7 . . 
        . . . 7 7 f 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 f 7 7 . 
        . . . 7 7 f f 7 7 7 7 7 . 
        . . . 7 f 7 f f 7 7 7 . . 
        . . . . . 7 7 f 7 . . . . 
        . 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . . 7 7 7 7 . 7 . . 
        . . . . . 7 7 7 7 . . 7 7 
        . . . . . 7 7 7 . . . . . 
        . . . . . 7 7 7 . . . . . 
        . . . . 7 . . . 7 . . . . 
        . . . 7 7 . . . 7 7 . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Juanito,
    [img`
        . 7 7 . . . . . . . . 7 7 
        7 . 7 7 . . . . . . 7 . 7 
        7 . . 7 7 7 f 7 f 7 7 . . 
        . . . 7 7 7 7 f 7 7 7 . . 
        . . . 7 7 f 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 f 7 7 . 
        . . . 7 7 f f 7 7 7 7 7 . 
        . . . 7 f 7 f f 7 7 7 . . 
        . . . . . 7 7 f 7 . . . . 
        . 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . . 7 7 7 7 . 7 . . 
        . . . . . 7 7 7 7 . . 7 7 
        . . . . . 7 7 7 . . . . . 
        . . . . . 7 7 7 . . . . . 
        . . . . 7 . . . 7 . . . . 
        . . . 7 7 . . . 7 7 . . . 
        `,img`
        . 7 7 . . . . . . . . 7 7 
        7 . 7 7 . . . . . . 7 . 7 
        7 . . 7 7 7 f 7 f 7 7 . . 
        . . . 7 7 7 7 f 7 7 7 . . 
        . . . 7 7 f 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 f 7 7 . 
        . . . 7 7 f f 7 7 7 7 7 . 
        . . . 7 f 7 f f 7 7 7 . . 
        . . 7 . . 7 7 f 7 . . . . 
        . . 7 7 7 7 7 7 7 7 7 . . 
        . . . . . 7 7 7 7 . . 7 . 
        . . . . . 7 7 7 7 . . 7 7 
        . . . . . 7 7 7 . . . . . 
        . . . . . 7 7 7 . . . . . 
        . . . . 7 . . . 7 . . . . 
        . . . 7 7 . . . 7 7 . . . 
        `,img`
        . 7 7 . . . . . . . . 7 7 
        7 . 7 7 . . . . . . 7 . 7 
        7 . . 7 7 7 f 7 f 7 7 . . 
        . . . 7 7 7 7 f 7 7 7 . . 
        . . . 7 7 f 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 f 7 7 . 
        . . . 7 7 f f 7 7 7 7 7 . 
        . 7 . 7 f 7 f f 7 7 7 . . 
        . . 7 . . 7 7 f 7 . . . . 
        . . 7 7 7 7 7 7 7 7 7 . . 
        . . . . . 7 7 7 7 . . 7 . 
        . . . . . 7 7 7 7 . . 7 . 
        . . . . . 7 7 7 . . . . . 
        . . . . . 7 7 7 . . . . . 
        . . . . 7 . . . 7 . . . . 
        . . . 7 7 . . . 7 7 . . . 
        `,img`
        . 7 7 . . . . . . . . 7 7 
        7 . 7 7 . . . . . . 7 . 7 
        7 . . 7 7 7 f 7 f 7 7 . . 
        . . . 7 7 7 7 f 7 7 7 . . 
        . . . 7 7 f 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 f 7 7 . 
        . . . 7 7 f f 7 7 7 7 7 . 
        . . . 7 f 7 f f 7 7 7 . . 
        . . 7 . . 7 7 f 7 . . . . 
        . . 7 7 7 7 7 7 7 7 7 . . 
        . . . . . 7 7 7 7 . . 7 . 
        . . . . . 7 7 7 7 . . 7 7 
        . . . . . 7 7 7 . . . . . 
        . . . . . 7 7 7 . . . . . 
        . . . . 7 . . . 7 . . . . 
        . . . 7 7 . . . 7 7 . . . 
        `],
    100,
    true
    )
    tiles.placeOnRandomTile(Juanito, assets.tile`myTile7`)
    Juanito.follow(astronaut, 36)
    rocketMars = sprites.create(img`
        .......dd.......
        ......dddd......
        ....ddddddd.....
        ..dddddddddd....
        .dddddddddddd...
        .dddddddddddddd.
        .222dddddddddd2.
        .22222222222222.
        .22222222222222.
        .22222222222222.
        .22222222222222.
        222222222222222.
        112222222222221.
        1122222222222111
        1112299992221111
        1111299999921111
        1119999999991111
        1119999999991111
        .119999999991111
        .11199999999111.
        .11119999991111.
        .11112299911111.
        .1112222221111..
        ..112222221111..
        ..122222222111..
        ..222222222211..
        ..222222222222..
        ..222222222222..
        ..2222222222222.
        .22222222222222.
        22222.......2222
        222..........222
        `, SpriteKind.bigRocketKind)
    tiles.placeOnRandomTile(rocketMars, assets.tile`myTile7`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (astronaut) {
        astronautDirection = 3
        animation.runImageAnimation(
        astronaut,
        [img`
            . . . . . f f f f f f f . . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 9 9 9 9 9 9 f . . . 
            . . . . f 9 9 9 9 9 9 9 f . . . 
            . . . . f 1 9 9 9 9 9 9 f . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . f . . f 1 1 b b f . . . . . 
            . . . f f f 1 c 1 1 f f f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f . . f f . . . . . 
            . . . . . . . f . . f . . . . . 
            . . . . . . f . . . f . . . . . 
            `,img`
            . . . . . f f f f f f f . . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 9 9 9 9 9 9 f . . . 
            . . . . f 9 9 9 9 9 9 9 f . . . 
            . . . . f 1 9 9 9 9 9 9 f . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . f . . f 1 1 b b f . . . . . 
            . . . f f f 1 c 1 1 f f f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f . . . . . . . 
            `,img`
            . . . . . f f f f f f f . . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 9 9 9 9 9 9 f . . . 
            . . . . f 9 9 9 9 9 9 9 f . . . 
            . . . . f 1 9 9 9 9 9 9 f . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . f . . f 1 1 b b f . . . . . 
            . . . f f f 1 c 1 1 f f f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . f . . . . . . . 
            `,img`
            . . . . . f f f f f f f . . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 9 9 9 9 9 9 f . . . 
            . . . . f 9 9 9 9 9 9 9 f . . . 
            . . . . f 1 9 9 9 9 9 9 f . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . f . . f 1 1 b b f . . . . . 
            . . . f f f 1 c 1 1 f f f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . f . f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f . . f . . . . . . 
            `],
        100,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.showLongText("Oh no! Juanito caught you!", DialogLayout.Full)
    game.gameOver(false)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (astronaut) {
        animation.stopAnimation(animation.AnimationTypes.All, astronaut)
        astronaut.setImage(img`
            . . . . f f f f f f f f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . e 1 1 1 1 1 1 1 1 f . . . 
            . . . . e e f f f f f f . . . . 
            . . . . . f e e e e f . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . f f f e e e e f f f . . . 
            . . . . . f e e e e f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            `)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (astronaut) {
        astronautDirection = 4
        animation.runImageAnimation(
        astronaut,
        [img`
            . . . . f f f f f f f f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 9 9 9 9 9 9 1 f . . . 
            . . . f 9 9 9 9 9 9 9 9 f . . . 
            . . . f 1 9 9 9 9 9 9 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . f f f f f f f f . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . f . f b b 1 1 f . f . . . 
            . . . f f f 1 1 c 1 f f f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 9 9 9 9 9 9 1 f . . . 
            . . . f 9 9 9 9 9 9 9 9 f . . . 
            . . . f 1 9 9 9 9 9 9 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . f f f f f f f f . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . f . f b b 1 1 f . f . . . 
            . . . f f f 1 1 c 1 f f f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . . . . . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 9 9 9 9 9 9 1 f . . . 
            . . . f 9 9 9 9 9 9 9 9 f . . . 
            . . . f 1 9 9 9 9 9 9 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . f f f f f f f f . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . f . f b b 1 1 f . f . . . 
            . . . f f f 1 1 c 1 f f f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 9 9 9 9 9 9 1 f . . . 
            . . . f 9 9 9 9 9 9 9 9 f . . . 
            . . . f 1 9 9 9 9 9 9 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . f f f f f f f f . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . f . f b b 1 1 f . f . . . 
            . . . f f f 1 1 c 1 f f f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . f . . f . . . . . . 
            . . . . . . . . . f . . . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 9 9 9 9 9 9 1 f . . . 
            . . . f 9 9 9 9 9 9 9 9 f . . . 
            . . . f 1 9 9 9 9 9 9 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . . f f f f f f f f . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . f . f b b 1 1 f . f . . . 
            . . . f f f 1 1 c 1 f f f . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . f 1 1 1 1 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . f . . . . . . 
            . . . . . . . . . f . . . . . . 
            . . . . . . . . . f . . . . . . 
            `],
        80,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.miniRocketMars, assets.tile`myTile0`, function (sprite, location) {
    info.stopCountdown()
    game.showLongText("You have brought the rocks safe to the Earth! You win!", DialogLayout.Full)
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile7`)
    rocksLeftinMars.value += -1
})
sprites.onOverlap(SpriteKind.mouseKind, SpriteKind.creativeKind, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(rockCollectionButton)
        sprites.destroy(mouse)
        sprites.destroy(creativeModeButton)
        marsMode = 2
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        engine = sprites.create(img`
            .cccceeeeeebbbeeeeeeeeeeeefc..
            ..cccddeeebbbbbeeee4eee4eeccc.
            ...cdd4cbbbbbbb4444ebbb4ecccc.
            ..dddddbbbbbbbbeeeeebb4bccccc.
            ..ddddbbbbbbbbcccceeb44bccccc.
            .ddddbbbbbbbbcccccccb4bbccc...
            c4444ccbbbbbb44ccddccbbbbbf...
            cccc4ccebbbe4ccdddddebbbbbf...
            ccc4cceeeeeeeccddddddbbbbbb...
            ccc4cceeeeeeeccddddddbbbbbbbbb
            ..c4ceeeeeeeeccddddddbbbbbbbbb
            ..c4eeeeeeeeeeeeddddddeeeebbbb
            ..f4eee444eeebbbedddeeeeeebbbb
            ..feeeeeee4fbbbbbddeeee444bbbb
            ..feeeeccc44bbbbbbbee44eeebbbb
            .feeececccc..bbbbbbf4e44eebbbb
            .fddd44cccc...bbbbb.fee44eeef.
            .fdddddcccc....bbb..feee4eeef.
            feedddd4cc...........feeeeeeef
            ffffffff..............ffffffff
            `, SpriteKind.Player)
        engine.setPosition(76, 101)
        body = sprites.create(img`
            feeeeeeeeeeeeeeeeeeeebbbbbfb
            feeeeeddeeeeeeeeeeeeeebbbbbf
            feeeeeddddddeeeeeeeeeebbbbbf
            feeeeeddddddddeeeeeeeebbbbbf
            feeeeeddddddddeeeeeeeeebeebf
            feeeeeddddddd44eeeeeeccceeef
            feeeeee44ddd44444eecccccceef
            feeeeee44444444444ccccccceef
            feeeeee4444444444cccccccceef
            feeeee4444444444ccccccccceef
            feeeee444444444ccccccccceeef
            feeee4444444444cccccccceeeef
            feeee4444444444ccccccceeeeef
            feee.4444444444ccccccceeeeef
            fee...444444444ccccccbeeeeef
            f.....4444444bbbcccccbbeeeef
            f.....44444bbbbbbccccbbbeeef
            f......444bbbbbbbbbcbbbbbeef
            f......44bbbbbbbbbbbbbbbbeef
            f.....444bbbbbbbbbbbbbbbbeef
            f.....eeeeeebbbbbbbbbbbbbeef
            f.....eeeeeeeeebbbbbbbbbeeef
            fee.eeeeeeeeeeeeeebbbbbbeeef
            feeeeeeeddeeeeeeeeeebbbbeeef
            feeeeedddddeeeeeeeeeeeeeeeef
            feee4ddddddeeeeeeeeeeeeeeeef
            fee44ddddddeeeeeeeeeeeeeeebf
            fe4444dddddeeee..eeeeeeebbbf
            fe4444dddddeee.....eeebbbbbf
            fe44444ddddeee......bbbbbbbf
            f444444dddddee......ebbbbbbf
            f4444444ddddeee......bbbbbbf
            f4444444ddddeeee.....ebbbbbf
            f4444444eeeeeeee....eebbbbbf
            f4444444eeeeeeeeee..eebbbbbf
            f4444444bbbbeeeeeeeeeebbbbef
            feebbbbbbbbbeeeeeeeeeebbddef
            feebbbbbbbbbbeeeeeeeeddddddf
            feebbbbbbbbbbbeeeeeedddddddf
            febbbbbbbbbbcbeeeedddddddddf
            febbbbbbbcccccceeeddddddddef
            febbbbbbccccccceeeeddddddeef
            fbbbbbbccccccccceeeeeddddeef
            fbbbbbbccccccccceeeeeddddeef
            febbbbcbccccccccceeeeeeddeef
            feeebeccccccccccceeeeeeedeef
            feeeeccccccccccccceeeeeeeeef
            feeeecccccccccccccceeeeeeeef
            feeeecccccccccccccceeeeeeeef
            feeeeccccccccccccccceeeeeeef
            feeeeecc4444444ccceeeeeee44f
            feeeeee4444444444eeeeeee444f
            feeeee44444444444eeeee44444f
            feeeee44444444444eeeee44444f
            feeeee44444444444eeee444444f
            feeeee4444444444eeeee444444f
            feeee4444444444eeeee4444444f
            feeee444444444eeeeee4444444f
            feeeeee4444eeeeeeeee4444444f
            feeeeeeeeeeeeeeeeeee4444444f
            `, SpriteKind.Player)
        body.setPosition(76, 61)
        tip = sprites.create(img`
            ...........................
            .............f..ffffff.....
            ..........f.feffbbbbbf.....
            .......fffcfeeeebbbbbf.....
            .....ffccccfeeeebbbbbf.....
            .....fcccccceeeebbbbbf.....
            .....fcccccceeebbbbbbf.....
            .....fcccccceeddbbbbbf.....
            .....fccccccdddddbbbbf.....
            .....fcccccdddddddbbbf.....
            ...fffccccedddddddeeff.....
            ...fbbcccceddddddddef......
            ...fbbbbbeedddddddddff.....
            ...fbbbbbeeedddddddddf.....
            ...fbbbbbeeedddddddddff.fff
            ffffbbbbbeee44ddddddeefff4f
            f44ebbbbbeee44ddddeeeeee44f
            f444bbbbbe44444eeeeeee4444f
            f4444eee4444444eeeeeee4444f
            f4444eee4444444eeeeeeeee44f
            f4444eee4444444eeeeeeeee44f
            f44eeeeee444444eeeeeeeeeeef
            feeeeeeee44eeeeeeeeeeeeeeef
            `, SpriteKind.Player)
        tip.setPosition(76, 20)
        enginePlace = 1
        bodyPlace = 1
        tipPlace = 1
        selectPlace = ENGINE_SELECTION
        arrows = sprites.create(img`
            .f....................................................................
            .ff..................................................................f
            ..f.................................................................f.
            ...ff..............................................................ff.
            ....f.............................................................f...
            .....ff..........................................................ff...
            ......fff........................................................f....
            ........ff......................................................f.....
            ........ff.....................................................ff.....
            ........f.....................................................ff......
            .......f......................................................ff......
            .....ff........................................................fff....
            ....f............................................................f....
            ...ff............................................................ff...
            ..ff..............................................................fff.
            .f..................................................................ff
            `, SpriteKind.Player)
        arrows.setPosition(76, 101)
        game.showLongText("Build a rocket to reach Mars and build a base. (Or anything what you want)", DialogLayout.Full)
        scene.setBackgroundImage(img`
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            99999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddd99999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddd99999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddd9999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
            99999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddd9999999999999999999999999999999999999999999999999999999999999999999999
            99999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddd9999999999999999999999999999999999999999999999999999999999dddddddddd99
            dd999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd99999999999999999999999999999999999999999999999999999999ddddddddddddd
            ddddd999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9999999999999999999999999999999999999999999999999999999dddddddddddddd
            dddddd99999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9999999999999999999999999999999999999999999999999999999dddddddddddddd
            ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9999999999999999999999999999999999999999999999999999999dddddddddddddd
            ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd999999999999999999999999999999999999999999999999ddddddddddddddddddddd
            ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd99999999999999999999999999999999999999999999999dddddddddddddddddddddd
            ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddd999999999999999999999999999999999999999999999ddddddddddddddddddddddd
            ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddd999999999999999999999999999999999999999999999ddddddddddddddddddddddd
            ddddddd999999999999999999999999999999999ddd9999999999999999999999999999999999999999ddddddddd999999999999999999999999999999999999999999999dd7777777777777dddddddd
            ddddddd999999999999999999999999999999ddddddd999999999999999999999999999999999999999dddddddddd999999999999999999999999999999999999999977777777777777777777ddddddd
            ddddddd9999999999999999999999999999ddddddddd999999999999999999999999999999999999999dddddddddd9999999999999999999999999999999999999777777777777777777777777dddddd
            ddddddd99999999999999999999999999dddddddddddd99999999999999999999999999999999999999ddddddddddd999999999999977777777777777777777777777777777777777777777777dddddd
            ddddddd9999999999999999999999999ddddddddddddd9999999999999999999999999999999999999dddddddddddd977777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd999999999999999999999999dddddddddddddd999999999999999999999999999999999999ddddddddddddd977777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd999999999997999999999999dddddddddddddd999999999999999999999999999999999999ddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd999997777777799999999999dddddddddddddd999999999999999999999999dd999999999dddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd997777777777799999999999ddddddddddddddd9999999999999999999999ddddddd9999ddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd77777777777779999999999dddddddddddddddd999999999999999999999dddddddddd99ddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd77777777777779999999999dddddddddddddddd999999999999999999999ddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd77777777777777999999999dddddddddddddddd999999999999999999999ddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
            ddddd7777777777777777999999999dddddddddddddddd99999999999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
            dddd77777777777777777999999ddddddddddddddddddd99999999999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
            dddd77777777777777777ddddddddddddddddddddddddd99ddd999999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
            ddd777777777777777777ddddddddddddddddddddddddd99dddd99999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
            ddd777777777777777777dddddddddddddddddddddddddddddddd9999999999999dddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777ddddd
            dd7777777777777777777ddddddddddddddddddddddddddddddddd999999999999dddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777ddddd
            dd7777777777777777777ddddddddddddddddddddddddddddddddd99999999999ddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777ddddd
            d77777777777777777777ddddddddddddddddddddddddddddddddd99999999999dddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777ddddd
            d77777777777777777777ddddddddddddddddddddddddddddddddd99999999999ddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777dddd
            d77777777777777777777dddddddddddd77777dddddddddddddddd99999999999dddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777dddd
            7777777777777777777777ddddddddddd7777777dddddddddddddd99999999999ddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777dddddddddd77777777dddddddddddddd9999999999dddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777ddddddd77777777777dddddddddddddddddddddd9dddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777dddd777777777777dddddddddddddddddddddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777dddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            777777777777777777777777777777777777777777777777777dddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777dddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777dddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777dddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
    }
})
sprites.onOverlap(SpriteKind.bigRocketKind, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(rocketMars)
    sprites.destroy(Juanito)
    sprites.destroy(astronaut)
    game.showLongText("Congratulations! Now, go home.", DialogLayout.Full)
    tiles.setCurrentTilemap(tilemap`level1`)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff
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
    rocket = sprites.create(img`
        4 e 
        5 3 
        `, SpriteKind.miniRocketMars)
    tiles.placeOnTile(rocket, tiles.getTileLocation(8, 5))
    scene.cameraFollowSprite(rocket)
    if (fuel == 4) {
        info.startCountdown(25)
        fuel = 7
    }
    if (fuel == 5) {
        info.startCountdown(32)
        fuel = 8
    }
    if (fuel == 6) {
        info.startCountdown(40)
        fuel = 9
    }
    if (velocity == 1) {
        controller.moveSprite(rocket, 3, 3)
    }
    if (velocity == 2) {
        controller.moveSprite(rocket, 5, 5)
    }
    if (velocity == 3) {
        controller.moveSprite(rocket, 7, 7)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile7`)
    rocksLeftinMars.value += -1
})
let velocity = 0
let fuel = 0
let rocketMars: Sprite = null
let Juanito: Sprite = null
let rocksLeftinMars: StatusBarSprite = null
let rocket: Sprite = null
let arrows: Sprite = null
let tipPlace = 0
let tip: Sprite = null
let creativeModeButton: Sprite = null
let rockCollectionButton: Sprite = null
let bodyPlace = 0
let body: Sprite = null
let marsButton: Sprite = null
let enginePlace = 0
let engine: Sprite = null
let astronautDirection = 0
let astronaut: Sprite = null
let marsMode = 0
let Menu: Sprite = null
let mouse: Sprite = null
let START = 0
let selectPlace = 0
let ON_MARS = 0
let ENGINE_SELECTION = 0
ENGINE_SELECTION = 1
let BODY_SELECTION = 2
let TIP_SELECTION = 3
let TRIP_IN_SPACE = 4
ON_MARS = 5
selectPlace = START
let scrapEngineImage = img`
    .cccceeeeeebbbeeeeeeeeeeeefc..
    ..cccddeeebbbbbeeee4eee4eeccc.
    ...cdd4cbbbbbbb4444ebbb4ecccc.
    ..dddddbbbbbbbbeeeeebb4bccccc.
    ..ddddbbbbbbbbcccceeb44bccccc.
    .ddddbbbbbbbbcccccccb4bbccc...
    c4444ccbbbbbb44ccddccbbbbbf...
    cccc4ccebbbe4ccdddddebbbbbf...
    ccc4cceeeeeeeccddddddbbbbbb...
    ccc4cceeeeeeeccddddddbbbbbbbbb
    ..c4ceeeeeeeeccddddddbbbbbbbbb
    ..c4eeeeeeeeeeeeddddddeeeebbbb
    ..f4eee444eeebbbedddeeeeeebbbb
    ..feeeeeee4fbbbbbddeeee444bbbb
    ..feeeeccc44bbbbbbbee44eeebbbb
    .feeececccc..bbbbbbf4e44eebbbb
    .fddd44cccc...bbbbb.fee44eeef.
    .fdddddcccc....bbb..feee4eeef.
    feedddd4cc...........feeeeeeef
    ffffffff..............ffffffff
    `
let modernEngineImage = img`
    .f11111111999999999111111111f.
    .f11111119999999999911111111f.
    .f11111119999999999999111111f.
    .f11119999999999999999911111f.
    .ffff9999999999999999999fffff.
    .....ff999999999999999ff......
    .......fff6999999998ff........
    ........f666999999888ff.......
    .......f666669999888888f......
    .....ff66666669988888888f.....
    ...ff66666666666888888888fff..
    .ff666666666666f88888888888ff.
    .f66666666666ff.ff8888888888f.
    .f666666666ff.....ff88888888f.
    .f66666666f.........f8888888f.
    .f666666ff...........ff88888f.
    .f6666fff..............f8888f.
    .f666f..................ff88f.
    .f6fff....................f8f.
    .ff........................ff.
    `
let normalEngineImage = img`
    .f2225444444444444444452222ff.
    .ff22254444444444444452222f...
    ..f2225244444444444425222ff...
    ...ff2522444444444422522f.....
    ....ff22244444444422222f......
    .....f2222244444442222ff......
    ......f222224444422222f.......
    ......f252224454422222f.......
    .......f55222444222555f.......
    .......f555224542222522f......
    ......f25222444442255522f.....
    ......f25222445442225222f.....
    .....f255222444444225222f.....
    .....f2552244444444252222f....
    .....f5222444444444252225f....
    ....f522224445454442222225f...
    ....f555244455455444222555f...
    ...f22222444444444444222222f..
    ...f2222444444544444422222ff..
    ..ffffffffffffffffffffffffff..
    `
let scrapBodyImage = img`
    feeeeeeeeeeeeeeeeeeeebbbbbfb
    feeeeeddeeeeeeeeeeeeeebbbbbf
    feeeeeddddddeeeeeeeeeebbbbbf
    feeeeeddddddddeeeeeeeebbbbbf
    feeeeeddddddddeeeeeeeeebeebf
    feeeeeddddddd44eeeeeeccceeef
    feeeeee44ddd44444eecccccceef
    feeeeee44444444444ccccccceef
    feeeeee4444444444cccccccceef
    feeeee4444444444ccccccccceef
    feeeee444444444ccccccccceeef
    feeee4444444444cccccccceeeef
    feeee4444444444ccccccceeeeef
    feee.4444444444ccccccceeeeef
    fee...444444444ccccccbeeeeef
    f.....4444444bbbcccccbbeeeef
    f.....44444bbbbbbccccbbbeeef
    f......444bbbbbbbbbcbbbbbeef
    f......44bbbbbbbbbbbbbbbbeef
    f.....444bbbbbbbbbbbbbbbbeef
    f.....eeeeeebbbbbbbbbbbbbeef
    f.....eeeeeeeeebbbbbbbbbeeef
    fee.eeeeeeeeeeeeeebbbbbbeeef
    feeeeeeeddeeeeeeeeeebbbbeeef
    feeeeedddddeeeeeeeeeeeeeeeef
    feee4ddddddeeeeeeeeeeeeeeeef
    fee44ddddddeeeeeeeeeeeeeeebf
    fe4444dddddeeee..eeeeeeebbbf
    fe4444dddddeee.....eeebbbbbf
    fe44444ddddeee......bbbbbbbf
    f444444dddddee......ebbbbbbf
    f4444444ddddeee......bbbbbbf
    f4444444ddddeeee.....ebbbbbf
    f4444444eeeeeeee....eebbbbbf
    f4444444eeeeeeeeee..eebbbbbf
    f4444444bbbbeeeeeeeeeebbbbef
    feebbbbbbbbbeeeeeeeeeebbddef
    feebbbbbbbbbbeeeeeeeeddddddf
    feebbbbbbbbbbbeeeeeedddddddf
    febbbbbbbbbbcbeeeedddddddddf
    febbbbbbbcccccceeeddddddddef
    febbbbbbccccccceeeeddddddeef
    fbbbbbbccccccccceeeeeddddeef
    fbbbbbbccccccccceeeeeddddeef
    febbbbcbccccccccceeeeeeddeef
    feeebeccccccccccceeeeeeedeef
    feeeeccccccccccccceeeeeeeeef
    feeeecccccccccccccceeeeeeeef
    feeeecccccccccccccceeeeeeeef
    feeeeccccccccccccccceeeeeeef
    feeeeecc4444444ccceeeeeee44f
    feeeeee4444444444eeeeeee444f
    feeeee44444444444eeeee44444f
    feeeee44444444444eeeee44444f
    feeeee44444444444eeee444444f
    feeeee4444444444eeeee444444f
    feeee4444444444eeeee4444444f
    feeee444444444eeeeee4444444f
    feeeeee4444eeeeeeeee4444444f
    feeeeeeeeeeeeeeeeeee4444444f
    `
let normalBodyImage = img`
    .....f44454444444444554f....
    .....f44445544444555444f....
    .....f44444455555444444f....
    .....f44444444544444444f....
    .....f4444444454444444ff....
    .....f4444444454444444f.....
    .....ff444444454444444f.....
    ......f444444454444444f.....
    ......f444444454444444f.....
    ......f444444454444444f.....
    ......f444444454444444f.....
    ......f444444454444444f.....
    ......f444444454444444f.....
    ......f444444454444444f.....
    fff..ff444444454444444f.....
    22ffff4444444454444444ffffff
    2222222244444454444442222222
    2222252244454454454442252222
    ff2222224444445444444222222f
    .fff2222444444544444422222ff
    ...ff22244444455444442222ff.
    ....ff224444444544444222ff..
    .....f4444444445444444fff...
    .....f4444444445444444f.....
    .....f444444444544444ff.....
    .....f444444444544444f......
    .....f444444444454444f......
    ....ff444444444454444f......
    ....f2222244444452222ff.....
    ....f22222444444522222f.....
    ...ff22222444444522222ff....
    ...f2222224444445222222ff...
    ..ff22222244444452222222ff..
    .ff2222222444444522522222ff.
    .f222225224444445222222222ff
    .f2222222244444452222222222f
    ..ff22222224444452222222222f
    ...ffff444444444544444ffffff
    ......f444444444544444f.....
    ......f444444444544444f.....
    ......f444444444544444f.....
    ......f444444444544444f.....
    ......f444444444544444f.....
    ......f444444444544444f.....
    ......f444444444544444f.....
    ......f444444444544444f.....
    ......f444422244522224f.....
    ......f444222244522222ff....
    ......f4422522445225222ff...
    ....fff22222244454222222f...
    ....f2222222244544222222f...
    ....f2222222244544422222f...
    ....f2222222244544422522f...
    ....f2222522244544422222f...
    ....f2222222244444442222f...
    ....f2222222444444444222f...
    ...ff2222244444444444222f...
    ...ff2222444444444444422ff..
    ..ff2224444444444444444442f.
    .f4444444444444444444444444.
    `
let modernBodyImage = img`
    ..f8888888888888888888888888888f...
    ..ff888888888888868888888888888f...
    ...ff88888888888666688888888888f...
    ....f88888888886666668888888888f...
    ....f8888888886666666888888888ff...
    ....ff888888866666666668888888f....
    .....ff88888866666666666888888f....
    ......f8888666666996666668888ff....
    ......f8888866669199966668888f...ff
    ......ff888866669111966668888f...f9
    ff.....f888886699119666668888f...f9
    f9f....f888886666996666666888ff..f9
    f9f.ffff8888866666966666888889ffff9
    f9fff999188888666666666888888999999
    f99ff911188888866666666888888111119
    ff199111188888866666666888898111119
    .f911111199888886666668888889111119
    .f99999911988888866666888888f99999f
    .fffffff99888888866666888888fffffff
    .......fff888888866668888888f......
    .........f999888886668888888f......
    .........ff11988886668888889f......
    ..........f1199888866888889ff......
    ..........f111198888688889ff.......
    ..........f111119888888899f........
    ..........f111119988888899f........
    ..........f111111988888991f........
    ..........f111119988889911f........
    ..........f111198888899111f........
    ..........f111988888891111f........
    .........ff119888888899911f........
    ........ff89988888888888911f.......
    .......ff888888888888888891ff......
    ......ff88888881188888888899f......
    .....ff888888881118888888888f......
    .....f8888888811111888888888f......
    ....ff8888888111911188888888ff.....
    ...ff888888811119111188888888f.....
    ...f8888888111198991188888888f.....
    ..ff8888888111988891111888888fff...
    .ff8888888111988888911188888888f...
    .f88888881119888888891118888888f...
    .f88888811198888888891118888888f...
    .f88888811998888888889111888888ff..
    ff888881119888888888899111888888ff.
    ff8888811119888888889111118888888f.
    f88888111111988888899111188888888ff
    f888881111111988889111118888888888f
    f888888111111198889111118888888888f
    f888888811111119991111188888888888f
    f888888811111111911111888888888888f
    f888888881111111111188888888888888f
    f88888888811111111188888888888888ff
    ff8888888881111111888888888888888f.
    .f8888888888111111888888888888888f.
    .f888888888888118888888888888888ff.
    .f888888888888888888888888888888f..
    .ff88888888888888888888888888888f..
    ..f8888888888888888888888888888ff..
    ..f8888888888888888888888888888f...
    `
let scrapTipImage = img`
    ...........................
    .............f..ffffff.....
    ..........f.feffbbbbbf.....
    .......fffcfeeeebbbbbf.....
    .....ffccccfeeeebbbbbf.....
    .....fcccccceeeebbbbbf.....
    .....fcccccceeebbbbbbf.....
    .....fcccccceeddbbbbbf.....
    .....fccccccdddddbbbbf.....
    .....fcccccdddddddbbbf.....
    ...fffccccedddddddeeff.....
    ...fbbcccceddddddddef......
    ...fbbbbbeedddddddddff.....
    ...fbbbbbeeedddddddddf.....
    ...fbbbbbeeedddddddddff.fff
    ffffbbbbbeee44ddddddeefff4f
    f44ebbbbbeee44ddddeeeeee44f
    f444bbbbbe44444eeeeeee4444f
    f4444eee4444444eeeeeee4444f
    f4444eee4444444eeeeeeeee44f
    f4444eee4444444eeeeeeeee44f
    f44eeeeee444444eeeeeeeeeeef
    feeeeeeee44eeeeeeeeeeeeeeef
    `
let normalTipImage = img`
    ...........f2f...55........
    ..........ff2ff..555.......
    ..........f222f..5555......
    ..........f222f..5555......
    ..........f222ff..5........
    ........ff22222ff.5........
    ........f2222222f.5........
    .......ff2222222f.5........
    .......f22222222f.5........
    ......ff222442222f5........
    ......f222244222225........
    .....ff222444222225........
    .....f2222444422222f.......
    .....f2224454422222ff......
    .....f22244544222222ff.....
    .....f224455544222222ff....
    ....f22244555442222222f....
    ....f22244444444222222ff...
    ....f222222222222222222f...
    ....f222444444444222222f...
    ....f224555555544422222f...
    ....ff45555555554442222f...
    .....f44444444444444222f...
    `
let modernTipImage = img`
    ...........................
    ...........................
    ...........................
    ...........................
    ...........................
    ..........ffff.............
    ........fff88ffff..........
    .......ff8888888fff........
    .......f8888888888fff......
    ....fff8888888888888f......
    ...ff888666666888888fff....
    ...f888866666688888888f....
    ...f888666666668888888ff...
    .ff88866666666668888888ff..
    .f8886666999666668888888ff.
    ff88666699999666668888888f.
    f888666999999966666888888ff
    f8866669999999666668888888f
    f8666699999999666666888888f
    86666699999999966666668888f
    866666999999999666666668888
    866666999999999966666666888
    866669999999999966666666688
    `
game.showLongText("Welcome to...", DialogLayout.Full)
if (controller.A.isPressed()) {
    music.play(music.stringPlayable("D E F B A G - C5 ", 270), music.PlaybackMode.UntilDone)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffff1ffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff11ffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff111ffffffffff1ff11fffffffffff11fffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff111ff1ffffffffff1ffff1ffffffffff11ffffffffffffffffffff1fffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff11ffffffffffffffff1fffff1fffffffff11fffffffffffffffffff1fffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff11ffffffffffffffffff1ffffff1fffffff1f1ffffffffffffffffff1fffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff1fffffffffffffffffff111ffff1ffffff1ff1fffffffffffffffff1ffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff1fffffffffffffffffff1f1ffff1ffffff1fff1ffffffffffffffff1ffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff1fffffffffffffffffff1ff11f1fffffff1fff1fffffffffffffff1ffffff1f11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff1ffffffffffffffffffff1ffff1fffffff1fffff11fffffffffffff1ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff1ffffffffffffffffffff1ffffffffffff1ffffff1fffffffffffff1ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff1ffffffffffffffffffff1ffffffffffff1fffffff1ffffffffffff1fffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff1ffffffffffffffffffff1fffffffffff1fffffffff1fffffffffff1fffffffff1111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff1ffffffffffffffffffff1fffffffffff11111111ff1ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff1ffffffffffffffffffff1fffffffffff1fffffff1111fffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffff1fffffffffffffffffff1fffffffffff1ffffffffff1ffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffff1ffff1111ffffffffff1ffffffffff11ffffffffff1ffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff1111ffff11ffffffff1fffffffff1fffffffffffff1fffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffff11ffffff1fffffffff1ffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffff1ffffff1fffffffff1ffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff1fffff1fffffffff1fffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffff
        ffffffffffffffffffffffffffff1ffff1ffffffff1ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff1fffffffffffff1ffffffffffffffff11fffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffff1ffffffff1fffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff11ffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff
        fffffffffffffffffff11ffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
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
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffbbbb33fffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffbbbbbbbb3fffbbbbb3fffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffff3ffffffffffffbbffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbff33ffffffffffffff3bbffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffbf3fffffffffffffffff3bffffffffffffff
        ffffffffff1fffffffffff33fffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffb3fffffffffffffffffffbffffffffffffff
        ffffffffffffffffffffff3b3bfffffffffffffffffffffffffffffffffffffffffffffff3bffffffffffffffffffffffffffffffffffffffffbbfffffffbffffffffffffffffffffbffffffffffffff
        fffffffffffff3ffffffff3bffbffffffffffffffffffffffffffffffffffffffffffffffb3fffffffffffffbbbbbbbbbfffffffffffffffffffb3ffffffbffffffffffffffffffff3bfffffffffffff
        fffffffffffffbfffffffff3bffbffffffffffffffffbbbbbbbbb333fffffffffffffffffbbfffffbbbbbbbbfff3333333ffffffffffffffffffb3ffffffbfffffffffffffffffffffbfffffffffffff
        ffffffffffff3b3ffffffff3bfffbffffffff3ffffffbb3fffffffffffffffff3fffffffffbfffff33333333333ffffffffffffffffffffffffffbffffffbfffffffffffffffffffffbfffffffffffff
        ffffffffffffbb3ffffffff3bfff3bfffffff3ffffff3b3ffffffffffffffffbf3ffffffffbffffffff333fffffffffffffffffffffffffffffffb3fffffbfffffffffffffffffffffbfffffffffffff
        ffffffffffffbbf3fffffff3bffff3bffffff3ffffffbb3ffffffffffffffffbbbffffffffbfffffffffffbfffffffffffffffffffffffffffffffbfffffbfffffffffffffffffffffb3ffffffffffff
        fffffffffff3bbf3fffffff3bfffff3bfffff3bffffb3fbffffffffffffffffbffbbffffff3bffffffffffbfffffffffffffffff3fffffffffffffbfffffbfffffffffffffffffffffb3ffffffffffff
        fffffffffffbffb3fffffff3bfffffbffffff3bfffb3ff3bbb3ffffffffffffbff3bffffff3bfffffffffb3fffffffffffffffff3bffffffffffffb3ffffbffffffffffffffffffffffb3fffffffffff
        ffffffffffb3fffbfffffff3bfffffbfffffffbfffbffff3bffffffffffffffbfffbffffff3bfffffffffb3fffffffffffffffff3bfffffffffffffbffffbffffffffffffffffffffffb3fffffffffff
        fffffffffb3fffffbffffff3bfffffb3ffffff3bffbfffffbfffffffffffff3bffffbfffff3bfffffffffb3fffffffffffffffff3bfffffffffffffbfff3bffffffffffffffffffffffbf3ffffffffff
        fffffffffb3f3b33b3fffff3bffffffbffffff3bffbfffffbfffffffffffff3bffffb3ffff3bfffffffffb3fffffffffffffffff3bfffffffffffffbfff3bfffffffffffffffffffffffb3ffffffffff
        ffffffffb3fffffffb3ffff3bffffffbffffff3fbb1fffff3bffffffffffff3bffffbf3ffffbfffffffffbffffffffffffffffff3bffffffffffff3bffffbfbbffffffffffff1fffffffb3ffffffffff
        ffffffffb3fffffffbfffff3bffffffbfffffff333fffffff3bfff3bbfffff3bfffffbf3ffb3fffffffffbffffffffffffffffff3bffffffffffff3bffffbfb3bbffffffffffffffffffbfffffffffff
        ffffffff3ffffffffb3ffff3bffffffbfffffffffffffffff33bbbbfffffff3bffffffbb33b3fffffffffbffffffffffffffffff3bffffffffffff3bffffbfb3f3bbfffffffffffffffbffffffffffff
        ffffffff3fffffffffbffff3bffffff3bfffffffffffffffffffffffffffff3bffffffffbbbffffffffffbffffffffffffffffff3bffffffffffff3bffffbffbb3ffbffffffffffffffbffffffffffff
        ffffffff3fffffffffbffff3bffffff3bfffffffffffffffffffffffffffff3bfffffffffffffffffffffbfffffffffffffffffff3bfffffffffff3bffffbfff3bbfbfffffffffffffbfffffffffffff
        fffffff3fffffffffffbfff3bffffff3bfffffffffffffffffffffffffffff3bfffffffffffffffffffffbfffffffffffffffffff3bfffffffffff3bffffbffff33bbffffffffffff3bfffffffffffff
        fffffffffffffffffffbbbf3bffffff3bfffffffffffffffffffffffffffff3bffffffffffffffffffff3bfffffffffffffffffff3bfffffffffffbfffffbffffff3bbbfffffff33bbffffffffffffff
        fffffffffffffffffff3fff3bffffff3fbffffffffffffffffffffffffffff3bffffffffffffffffffff3bffffffffffffffffffffbfffffffffffbfffffbfffffffb33bb33333bbffffffffffffffff
        ffffffffffffffffffff3ff3bffffff3fbffffffffffffffffffffffffffff3fffffffffffffffffffff3bffffffffffffffffffffbffffffffffb3fffffbfffffffbffffbbbbbffffffffffffffffff
        fffffffffffffffffffffffbfffffff3fbffffffffffffffffffffffffffff3fffffffffffffffffffff3fffffffffffffffffffffbffffffffffb3fffffbfffffffb3ffffffffffffffffffffffffff
        fffffffffffffffffffffffbfffffff3fbffffffffffffffffffffffffffff3fffffffffffffffffffff3fffffffffffffffffffffb3ffffffffb3ffffffbffffffffb3fffffffffffffffffffffffff
        fffffffffffffffffffffffbfffffff3fbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb3ffffffffb3ffffff3fffffffffbbbfffffffffffffffffffffff
        fffffffffffffffffffffffbfffffff3fbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbf3ffffffb3fffffff3ffffffffff3fbffffffffffffffffffffff
        fffffffffffffffffffffffbfffffff3fbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb3ffffbb33fffffff3fffffffffff3bffffffffffffffffffffff
        fffffffffffffffffffffffbffffff3ffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbb33fffffffff3ffffffffffff3bfffffffffffffffffffff
        fffffffffffffffffffffffbfffff3fffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333fffffffffffff3fffffffffffffbffffffffffffffffffff
        fffffffffffffffffffffffbfffff3fffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffffffff
        fffffffffffffffffffffffbffff33ffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff3bbffffffffffffffff
        fffffffffffffffffffffffbffff3fbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3bbbbffffffffffff
        fffffffffffffffffffffffbfffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffffff
        fffffffffffffffffffffff3fbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffff3b33fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    mouse = sprites.create(img`
        . 9 9 9 9 9 9 . 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 . 
        `, SpriteKind.mouseKind)
    Menu = sprites.create(img`
        . . . . . . . . . . . . . . . . . . 
        7 . . . 7 . 7 7 7 . 7 . . 7 . 7 . 7 
        7 7 . 7 7 . 7 . . . 7 7 . 7 . 7 . 7 
        7 . 7 . 7 . 7 7 . . 7 . 7 7 . 7 . 7 
        7 . . . 7 . 7 . . . 7 . . 7 . 7 . 7 
        7 . . . 7 . 7 7 7 . 7 . . 7 . 7 7 7 
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.startKind)
    mouse.setPosition(94, 13)
    Menu.setPosition(137, 13)
    controller.moveSprite(mouse, 100, 100)
    mouse.setStayInScreen(true)
    marsMode = 0
}
forever(function () {
    if (selectPlace == TIP_SELECTION) {
        if (tipPlace == 1) {
            if (controller.right.isPressed()) {
                changeTip(normalTipImage, 2)
            }
        }
        if (tipPlace == 2) {
            if (controller.right.isPressed()) {
                changeTip(modernTipImage, 3)
            }
        }
        if (tipPlace == 3) {
            if (controller.right.isPressed()) {
                changeTip(scrapTipImage, 1)
            }
        }
    }
})
forever(function () {
    if (selectPlace == TRIP_IN_SPACE) {
        if (velocity == 1) {
            controller.moveSprite(rocket, 3, 3)
        }
        if (velocity == 2) {
            controller.moveSprite(rocket, 5, 5)
        }
        if (velocity == 3) {
            controller.moveSprite(rocket, 5, 5)
        }
        if (fuel == 4) {
            info.startCountdown(27)
            fuel = 7
        }
        if (fuel == 5) {
            info.startCountdown(32)
            fuel = 8
        }
        if (fuel == 6) {
            info.startCountdown(38)
            fuel = 9
        }
    }
})
forever(function () {
    if (selectPlace == ENGINE_SELECTION) {
        if (controller.up.isPressed()) {
            selectPlace = BODY_SELECTION
            arrows.setPosition(76, 61)
            pause(1000)
        }
    }
    if (selectPlace == BODY_SELECTION) {
        if (controller.up.isPressed()) {
            selectPlace = TIP_SELECTION
            arrows.setPosition(76, 25)
            pause(1000)
        }
    }
    if (selectPlace == TIP_SELECTION) {
        if (controller.A.isPressed()) {
            selectPlace = TRIP_IN_SPACE
            game.showLongText("Lets go!!!", DialogLayout.Full)
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff
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
            sprites.destroy(body)
            sprites.destroy(engine)
            sprites.destroy(tip)
            sprites.destroy(arrows)
            rocket = sprites.create(img`
                4 e 
                5 3 
                `, SpriteKind.rocketKind)
            tiles.placeOnTile(rocket, tiles.getTileLocation(4, 4))
            tiles.setCurrentTilemap(tilemap`level1`)
            scene.cameraFollowSprite(rocket)
            if (fuel == 1) {
                info.startCountdown(25)
                fuel = 4
            }
            if (fuel == 2) {
                info.startCountdown(32)
                fuel = 5
            }
            if (fuel == 3) {
                info.startCountdown(40)
                fuel = 6
            }
            if (velocity == 1) {
                controller.moveSprite(rocket, 3, 3)
            }
            if (velocity == 2) {
                controller.moveSprite(rocket, 5, 5)
            }
            if (velocity == 3) {
                controller.moveSprite(rocket, 7, 7)
            }
        }
    }
})
forever(function () {
    if (selectPlace == ENGINE_SELECTION) {
        arrows.setPosition(76, 101)
        if (enginePlace == 1) {
            velocity = 1
            if (controller.right.isPressed()) {
                changeEngine(normalEngineImage, 2)
            }
        }
        if (enginePlace == 2) {
            velocity = 2
            if (controller.right.isPressed()) {
                changeEngine(modernEngineImage, 3)
            }
        }
        if (enginePlace == 3) {
            velocity = 3
            if (controller.right.isPressed()) {
                changeEngine(scrapEngineImage, 1)
            }
        }
    }
})
forever(function () {
    if (marsMode == 2 && selectPlace == ON_MARS) {
        if (astronaut) {
            if (controller.A.isPressed()) {
                if (astronautDirection == 1) {
                    tiles.setTileAt(tiles.getTileLocation(astronaut.x / 16 - 1, astronaut.y / 16), assets.tile`myTile17`)
                    tiles.setWallAt(tiles.getTileLocation(astronaut.x / 16 - 1, astronaut.y / 16), true)
                }
                if (astronautDirection == 2) {
                    tiles.setTileAt(tiles.getTileLocation(astronaut.x / 16, astronaut.y / 16 - 1), assets.tile`myTile17`)
                    tiles.setWallAt(tiles.getTileLocation(astronaut.x / 16, astronaut.y / 16 - 1), true)
                }
                if (astronautDirection == 3) {
                    tiles.setTileAt(tiles.getTileLocation(astronaut.x / 16 + 1, astronaut.y / 16), assets.tile`myTile17`)
                    tiles.setWallAt(tiles.getTileLocation(astronaut.x / 16 + 1, astronaut.y / 16), true)
                }
                if (astronautDirection == 4) {
                    tiles.setTileAt(tiles.getTileLocation(astronaut.x / 16, astronaut.y / 16 + 1), assets.tile`myTile17`)
                    tiles.setWallAt(tiles.getTileLocation(astronaut.x / 16, astronaut.y / 16 + 1), true)
                }
            }
            if (controller.B.isPressed()) {
                if (astronautDirection == 1) {
                    tiles.setTileAt(tiles.getTileLocation(astronaut.x / 16 - 1, astronaut.y / 16), assets.tile`myTile7`)
                    tiles.setWallAt(tiles.getTileLocation(astronaut.x / 16 - 1, astronaut.y / 16), false)
                }
                if (astronautDirection == 2) {
                    tiles.setTileAt(tiles.getTileLocation(astronaut.x / 16, astronaut.y / 16 - 1), assets.tile`myTile7`)
                    tiles.setWallAt(tiles.getTileLocation(astronaut.x / 16, astronaut.y / 16 - 1), false)
                }
                if (astronautDirection == 3) {
                    tiles.setTileAt(tiles.getTileLocation(astronaut.x / 16 + 1, astronaut.y / 16), assets.tile`myTile7`)
                    tiles.setWallAt(tiles.getTileLocation(astronaut.x / 16 + 1, astronaut.y / 16), false)
                }
                if (astronautDirection == 4) {
                    tiles.setTileAt(tiles.getTileLocation(astronaut.x / 16, astronaut.y / 16 + 1), assets.tile`myTile7`)
                    tiles.setWallAt(tiles.getTileLocation(astronaut.x / 16, astronaut.y / 16 + 1), false)
                }
            }
            if (controller.A.isPressed() && controller.B.isPressed()) {
                if (astronautDirection == 1) {
                    tiles.setTileAt(tiles.getTileLocation(astronaut.x / 16 - 1, astronaut.y / 16), assets.tile`myTile18`)
                    tiles.setWallAt(tiles.getTileLocation(astronaut.x / 16 - 1, astronaut.y / 16), true)
                }
                if (astronautDirection == 2) {
                    tiles.setTileAt(tiles.getTileLocation(astronaut.x / 16, astronaut.y / 16 - 1), assets.tile`myTile18`)
                    tiles.setWallAt(tiles.getTileLocation(astronaut.x / 16, astronaut.y / 16 - 1), true)
                }
                if (astronautDirection == 3) {
                    tiles.setTileAt(tiles.getTileLocation(astronaut.x / 16 + 1, astronaut.y / 16), assets.tile`myTile18`)
                    tiles.setWallAt(tiles.getTileLocation(astronaut.x / 16 + 1, astronaut.y / 16), true)
                }
                if (astronautDirection == 4) {
                    tiles.setTileAt(tiles.getTileLocation(astronaut.x / 16, astronaut.y / 16 + 1), assets.tile`myTile18`)
                    tiles.setWallAt(tiles.getTileLocation(astronaut.x / 16, astronaut.y / 16 + 1), true)
                }
            }
        }
    }
})
forever(function () {
    if (selectPlace == BODY_SELECTION) {
        if (bodyPlace == 1) {
            fuel = 1
            if (controller.right.isPressed()) {
                changeBody(normalBodyImage, 2)
            }
        }
        if (bodyPlace == 2) {
            fuel = 2
            if (controller.right.isPressed()) {
                changeBody(modernBodyImage, 3)
            }
        }
        if (enginePlace == 3) {
            fuel = 3
            if (controller.right.isPressed()) {
                changeBody(scrapBodyImage, 1)
            }
        }
    }
})
