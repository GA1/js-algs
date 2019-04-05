function IntegerRange(startInclusive, endExclusive) {
  this.startInclusive = startInclusive
  this.endExclusive = endExclusive
}

IntegerRange.prototype.isEmpty = function() {
  return this.size() === 0
}

IntegerRange.prototype.size = function() {
  return this.endExclusive - this.startInclusive
}

IntegerRange.prototype.intersection = function(that) {
  const newStartInclusive = Math.max(this.startInclusive, that.startInclusive)
  const newEndExclusive = Math.min(this.endExclusive, that.endExclusive)
  return new IntegerRange(newStartInclusive, newEndExclusive)
}

IntegerRange.prototype.areEqual = function(that) {
  const areBothEmpty = this.isEmpty() && that.isEmpty();
  const haveTheSameStartAndEnd = this.startInclusive === that.startInclusive && this.endExclusive === that.endExclusive;
  return (areBothEmpty) || (haveTheSameStartAndEnd)
}


module.exports.IntegerRange = IntegerRange