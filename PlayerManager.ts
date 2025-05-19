import * as hz from 'horizon/core';

class PlayerManager extends hz.Component<typeof PlayerManager> {
  static propsDefinition = {};
  private playerMap: Map<number, hz.Player> = new Map<number, hz.Player>();

  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      (player: hz.Player) => {
        this.playerMap.set(player.id, player);
        console.log(`added player: ${player.name.get()}`);
      },
    );
  }
}
hz.Component.register(PlayerManager);