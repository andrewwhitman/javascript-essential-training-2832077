/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Desk {
  constructor(color, material, drawerOpenStatus, batteryType, batteryQuantity) {
    (this.color = color),
      (this.material = material),
      (this.drawerOpenStatus = drawerOpenStatus),
      (this.drawerBatteries = {
        type: batteryType,
        quantity: batteryQuantity,
      });
  }
  openDrawer(openStatus) {
    this.drawerOpenStatus = openStatus;
  }
}

export default Desk;
