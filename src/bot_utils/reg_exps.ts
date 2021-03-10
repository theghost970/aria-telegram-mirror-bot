export class RegExps {
  readonly start: RegExp;
  readonly mirrortar: RegExp;
  readonly mirror: RegExp;
  readonly mirrorstatus: RegExp;
  readonly list: RegExp;
  readonly getfolder: RegExp;
  readonly cancelmirror: RegExp;
  readonly cancelall: RegExp;
  readonly disk: RegExp;

  constructor(commands: string[]) {
    this.start = new RegExp(commands[0], 'i');
    this.mirrortar = new RegExp(commands[1], 'i');
    this.mirror = new RegExp(commands[2], 'i');
    this.mirrorstatus = new RegExp(commands[3], 'i');
    this.list = new RegExp(commands[4], 'i');
    this.getfolder = new RegExp(commands[5], 'i');
    this.cancelmirror = new RegExp(commands[6], 'i');
    this.cancelall = new RegExp(commands[7], 'i');
    this.disk = new RegExp(commands[8], 'i');
  }
}
