---
# placeholder
title: Touhou
description: Touhou Wiki
---

## Installation

PC-98 games can be played using Linux-native X Neko Project II emulator ([xnp2](https://aur.archlinux.org/packages/xnp2/)AUR).

The following packages only depend on [Wine](https://wiki.archlinux.org/title/Wine 'Wine') to run (and [Timidity++](https://wiki.archlinux.org/title/Timidity%2B%2B 'Timidity++') to play MIDI music). A python engine is under development to remove the wine dependency. They install the free trial versions. You can easily replace the trials with the full game if you have it.

These games have been packaged for your convenience:

- Touhou 6: Embodiment of Scarlet Devil — [th06-demo-wine](https://aur.archlinux.org/packages/th06-demo-wine/)AUR or [th06-demo-pytouhou](https://aur.archlinux.org/packages/th06-demo-pytouhou/)AUR
- Touhou 7: Perfect Cherry Blossom — [th07](https://aur.archlinux.org/packages/th07/)AUR
- Touhou 8: Imperishable Night — [th08](https://aur.archlinux.org/packages/th08/)AUR

We need help [packaging](https://wiki.archlinux.org/title/Wine_PKGBUILD_Guidelines 'Wine PKGBUILD Guidelines') more Touhou games for the [AUR](https://wiki.archlinux.org/title/AUR 'AUR'). This is a list of games that have free, downloadable trial editions to build off of:

- Touhou 7.5: Immaterial and Missing Power
- Touhou 9: Phantasmagoria of Flower View
- Touhou 10: Mountain of Faith
- Touhou 10.5: Scarlet Weather Rhapsody
- Touhou 11: Subterranean Animism
- Touhou 12: Undefined Fantastic Object
- Touhou 13: Ten Desires
- Touhou 13.5: Hopeless Masquerade.
- Touhou 14: Double Dealing Character
- Touhou 14.5: Urban Legend in Limbo
- Touhou 15: Legacy of Lunatic Kingdom
- Touhou 15.5: Antinomy of Common Flowers
- Touhou 16: Hidden Star in Four Seasons
- Touhou 17: Wily Beast and Weakest Creature
- Touhou 18: Unconnected Marketeers

### Python Engine

[Linkmauve](https://linkmauve.fr/doc/touhou/) has made an experimental python engine to make the games more portable. It is definitely not stable, and is more of an outline for an engine than an actual one, but it is interesting nonetheless. See packages [pytouhou-hg](https://aur.archlinux.org/packages/pytouhou-hg/)AUR and [th06-demo-data](https://aur.archlinux.org/packages/th06-demo-data/)AUR.

## Extra Info

### Installing the full version

If you have the full version of either Imperishable Night or Perfect Cherry Blossom, you can place them in your home folder, or you can place them in the overlay so that they will work in the liveCD and also get installed to disk.

**Note:** `.th08` is Imperishable Night's wineprefix folder, and `.th07` is Perfect Cherry Blossom's.

1. Find the folder with the Touhou game files.
2. Set your file manager to see hidden files/folders. (in Cherimoya's Dolphin file manager, just press `Alt+.` (the period key))
3. Go to your "Home" folder and find the folders `.th08` and/or `.th07`.
4. Paste your game files right over the shortcuts in either `.th08` or `.th07`
5. Start your games normally. They will use the full version.

### MIDI Music

If you are using the trial edition, they only include MIDI files. To play them, you will also need to install [timidity++](https://archlinux.org/packages/?name=timidity%2B%2B) along with some soundfonts ([freepats-general-midi](https://archlinux.org/packages/?name=freepats-general-midi)).
