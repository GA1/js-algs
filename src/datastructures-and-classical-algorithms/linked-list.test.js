const { LinkedList } = require('./linked-list');

describe('Binary search', () => {

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
})
