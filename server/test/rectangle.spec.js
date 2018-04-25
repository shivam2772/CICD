let chai = require('chai'),
  path = require('path');
chai.should();
let Rectangle = require(path.join(__dirname, '..', 'rectangle'));
  describe('#width', () => {
    let rectangle;
    beforeEach(() => {
      rectangle = new Rectangle(10, 20);
    });
    it('returns the width', () => {
      rectangle.width.should.equal(10);
    });
    it('can be changed', () => {
      rectangle.width = 30;
      rectangle.width.should.equal(30);
    });
    
  });
  describe('#height', () => {
    let rectangle;
    beforeEach(() => {
      rectangle = new Rectangle(10, 20);
    });
    it('returns the height', () => {
      rectangle.height.should.equal(20);
    });
    it('can be changed', () => {
      rectangle.height = 30;
      rectangle.height.should.equal(30);
    });
    
  });
  describe('#area', () => {
    let rectangle;
    beforeEach(() => {
      rectangle = new Rectangle(10, 20);
    });
    it('returns the area', () => {
      rectangle.area.should.equal(200);
    });
   
  });
  describe('#circumference', () => {
    let rectangle;
    beforeEach(() => {
      rectangle = new Rectangle(10, 20);
    });
    it('returns the circumference', () => {
      rectangle.circumference.should.equal(60);
    });
    
});
