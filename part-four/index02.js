function order500(orderType, pay, stock) {
  if (orderType === 1 && pay) {
    console.log( '500元定金预购, 得到100优惠券' );
  } else if (orderType === 2) {
    order200(orderType, pay, stock);
  }
}

function order200(orderType, pay, stock) {
  if (orderType === 1) {
    if (pay) {
      console.log( '500元定金预购, 得到100优惠券' );
    } else {
      if (stock > 0) {
        console.log( '普通购买, 无优惠券' );
      } else {
        console.log( '手机库存不足' );
      }
    }
  } else if (orderType === 2) {
    if (pay) {
      console.log( '200元定金预购, 得到50优惠券' );
    } else {
      if (stock > 0) {
        console.log( '普通购买, 无优惠券' );
      } else {
        console.log( '手机库存不足' );
      }
    }
  } else {
    if (stock > 0) {
      console.log( '普通购买, 无优惠券' );
    } else {
      console.log( '手机库存不足' );
    }
  }
}

function order(orderType, pay, stock) {
  if (orderType === 1) {
    if (pay) {
      console.log( '500元定金预购, 得到100优惠券' );
    } else {
      if (stock > 0) {
        console.log( '普通购买, 无优惠券' );
      } else {
        console.log( '手机库存不足' );
      }
    }
  } else if (orderType === 2) {
    if (pay) {
      console.log( '200元定金预购, 得到50优惠券' );
    } else {
      if (stock > 0) {
        console.log( '普通购买, 无优惠券' );
      } else {
        console.log( '手机库存不足' );
      }
    }
  } else {
    if (stock > 0) {
      console.log( '普通购买, 无优惠券' );
    } else {
      console.log( '手机库存不足' );
    }
  }
}