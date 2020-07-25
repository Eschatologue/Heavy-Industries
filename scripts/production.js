const rotaryCompressor = extendContent(GenericCrafter, "rotary-compressor", {
  load(){
    this.topRegion = Core.atlas.find(this.name + "-top");
  },
  generateIcons: function(){
    return [
      Core.atlas.find(this.name)
    ];
  },
  draw(tile){
    const entity = tile.ent();
    const f = Vars.tilesize;
    Draw.rect(this.topRegion, tile.drawx() + 22 / f, tile.drawy() - 22 / f, entity.totalProgress * 2)};
