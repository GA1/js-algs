const { LinkedList } = require('./linked-list');

describe('Linked list', () => {

  describe('size', () => {
    it('returns 0 for empty list', () => {
      const ll = new LinkedList()
      expect(ll.size()).toBe(0);
    })

    it('returns 1 for list [2]', () => {
      const ll = new LinkedList()
      ll.append(2)
      expect(ll.size()).toBe(1);
    })

    it('returns 2 for list [2, 7]', () => {
      const ll = new LinkedList()
      ll.append(2)
      ll.append(7)
      expect(ll.size()).toBe(2);
    })
  })

  describe('get', () => {
    describe('when list is empty', () => {
      it('throws when list is empty', () => {
        const ll = new LinkedList()
        try {
          ll.get(0)
          expect(true).toBe(false);
        } catch (e) {
          expect(e.message).toBe('Unsupported Operation: can\'t get any element if the list is empty')
        }
      })

      it('throws saying the list is empty even when index is too big', () => {
        const ll = new LinkedList()
        try {
          ll.get(7)
          expect(true).toBe(false);
        } catch (e) {
          expect(e.message).toBe('Unsupported Operation: can\'t get any element if the list is empty')
        }
      })
    })

    describe('positive indexes', () => {
      it('throws when index is too big', () => {
        const ll = new LinkedList()
        try {
          ll.append(2)
          ll.get(7)
          expect(true).toBe(false);
        } catch (e) {
          expect(e.message).toBe('Unsupported Operation: index is too big, it\'s absolute value can\'t be bigger than the size of the list')
        }
      })

      it('returns correct for list [2]', () => {
        const ll = new LinkedList()
        ll.append(2)
        expect(ll.get(0)).toBe(2);
      })

      it('returns correct for list [2, 7]', () => {
        const ll = new LinkedList()
        ll.append(2)
        ll.append(7)
        expect(ll.get(0)).toBe(2);
        expect(ll.get(1)).toBe(7);
      })

      it('returns correct for list [2, 7, 11]', () => {
        const ll = new LinkedList()
        ll.append(2)
        ll.append(7)
        ll.append(11)
        expect(ll.get(0)).toBe(2);
        expect(ll.get(1)).toBe(7);
        expect(ll.get(2)).toBe(11);
      })
    })

    describe('negative indexes', () => {
      it('throws when index is too low', () => {
        const ll = new LinkedList()
        try {
          ll.append(2)
          ll.get(-7)
          expect(true).toBe(false);
        } catch (e) {
          expect(e.message).toBe('Unsupported Operation: index is too big, it\'s absolute value can\'t be bigger than the size of the list')
        }
      })

      it('returns correct for list [2]', () => {
        const ll = new LinkedList()
        ll.append(2)
        expect(ll.get(-1)).toBe(2);
      })

      it('returns correct for list [2, 7]', () => {
        const ll = new LinkedList()
        ll.append(2)
        ll.append(7)
        expect(ll.get(-1)).toBe(7);
        expect(ll.get(-2)).toBe(2);
      })

      it('returns correct for list [2, 5, 7]', () => {
        const ll = new LinkedList()
        ll.append(2)
        ll.append(7)
        ll.append(11)
        expect(ll.get(-1)).toBe(11);
        expect(ll.get(-2)).toBe(7);
        expect(ll.get(-3)).toBe(2);
      })
    })
  })

  describe('traverse', () => {
    it('returns correct for list []', () => {
      const ll = new LinkedList()
      expect(ll.traverse()).toEqual([]);
    })

    it('returns correct for list [2]', () => {
      const ll = new LinkedList()
      ll.append(2)
      expect(ll.traverse()).toEqual([2]);
    })

    it('returns correct for list [2, 7]', () => {
      const ll = new LinkedList()
      ll.append(2)
      ll.append(7)
      expect(ll.traverse()).toEqual([2, 7]);
    })
  })

  describe('iterator', () => {
    it('throws when list is empty', () => {
      const ll = new LinkedList()
      try {
        ll.iterator();
        expect(true).toBe(false)
      } catch (e) {
        expect(e.message).toBe('Unsupported operation: can\'t create iterator from an empty linked list')
      }
    })

    describe('isUpToDate', () => {
      it("returns true before modification", () => {
        const ll = new LinkedList()
        ll.append('a')
        const it = ll.iterator();
        expect(it.isUpToDate()).toBe(true)
      })

      it("returns false after modification", () => {
        const ll = new LinkedList()
        ll.append('a')
        const it = ll.iterator();
        ll.append('b')
        expect(it.isUpToDate()).toBe(false)
      })
    })

    describe('goNext', () => {
      it("iterates through list ['a']", () => {
        const ll = new LinkedList()
        ll.append('a')
        const it = ll.iterator();
        expect(it.getCurrent()).toBe('a')
        it.goNext()
        expect(it.getCurrent()).toBe('a')
      })

      it("iterates through list ['a', 'b', 'c']", () => {
        const ll = new LinkedList()
        ll.append('a')
        ll.append('b')
        ll.append('c')
        const it = ll.iterator();
        expect(it.getCurrent()).toBe('a')
        it.goNext()
        expect(it.getCurrent()).toBe('b')
        it.goNext()
        expect(it.getCurrent()).toBe('c')
        it.goNext()
        expect(it.getCurrent()).toBe('a')
        it.goNext()
        expect(it.getCurrent()).toBe('b')
        it.goNext()
        expect(it.getCurrent()).toBe('c')

      })
    })

    describe('goPrev', () => {
      it("iterates through list ['a']", () => {
        const ll = new LinkedList()
        ll.append('a')
        const it = ll.iterator();
        expect(it.getCurrent()).toBe('a')
        it.goPrev()
        expect(it.getCurrent()).toBe('a')
      })

      it("iterates through list ['a', 'b', 'c']", () => {
        const ll = new LinkedList()
        ll.append('a')
        ll.append('b')
        ll.append('c')
        const it = ll.iterator();
        expect(it.getCurrent()).toBe('a')
        it.goPrev()
        expect(it.getCurrent()).toBe('c')
        it.goPrev()
        expect(it.getCurrent()).toBe('b')
        it.goPrev()
        expect(it.getCurrent()).toBe('a')
        it.goPrev()
        expect(it.getCurrent()).toBe('c')
        it.goPrev()
        expect(it.getCurrent()).toBe('b')
      })
    })

    describe('after notifyAboutModification', () => {
      it("throws an exception when getCurrent is used", () => {
        const ll = new LinkedList()
        ll.append('a')
        const it = ll.iterator();
        ll.append('b')
        try {
          expect(it.getCurrent()).toBe('a')
          expect(true).toBe(false)
        } catch(e) {
          expect(e.message).toBe('Unsupported operation: the list has been modified since the creation of the iterator')
        }
      })

      it("throws an exception when goNext is used is used", () => {
        const ll = new LinkedList()
        ll.append('a')
        const it = ll.iterator();
        ll.append('b')
        try {
          expect(it.goNext()).toBe('a')
          expect(true).toBe(false)
        } catch(e) {
          expect(e.message).toBe('Unsupported operation: the list has been modified since the creation of the iterator')
        }
      })

      it("throws an exception when goPrev is used is used", () => {
        const ll = new LinkedList()
        ll.append('a')
        const it = ll.iterator();
        ll.append('b')
        try {
          expect(it.goPrev()).toBe('a')
          expect(true).toBe(false)
        } catch(e) {
          expect(e.message).toBe('Unsupported operation: the list has been modified since the creation of the iterator')
        }
      })
    })
  })

  describe('delete', () => {
    it('throws when list is empty', () => {
      const ll = new LinkedList()
      try {
        ll.delete(7)
        expect(true).toBe(false);
      } catch (e) {
        expect(e.message).toBe('Unsupported Operation: can\'t delete elements from an empty list')
      }
    })

    it('throws when the index is too big', () => {
      const ll = new LinkedList()
      try {
        ll.append(2)
        ll.delete(7)
        expect(true).toBe(false);
      } catch (e) {
        expect(e.message).toBe('Unsupported Operation: element with the index: 7 can\'t be deleted because it\'s bigger than the size of the list')
      }
    })

    it("deletes correctly for list ['a']", () => {
      const ll = new LinkedList()
      ll.append('a')
      ll.delete(0)
      expect(ll.size()).toEqual(0);
      expect(ll.traverse()).toEqual([]);
    })

    it("returns correct for list ['a', 'b', 'c']", () => {
      const ll = new LinkedList()
      ll.append('a')
      ll.append('b')
      ll.append('c')
      ll.delete(1)
      expect(ll.size()).toEqual(2);
      expect(ll.traverse()).toEqual(['a', 'c']);
    })
  })

})
