var productsData = [
    {id:1 ,name:"سیب" ,price: 10000},
    {id:2 ,name:"خیار",price: 10000},
    {id:3 ,name:"گوجه" ,price: 8000},
    {id:4 ,name:"سیب زمینی" ,price: 5000},
    {id:5 ,name:"پیاز" ,price: 5000},
    {id:6 ,name:"پرتقال" ,price: 20000}
]

var userBasket = []

var
persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
fixNumbers = function (str)
{
  if(typeof str === 'string')
  {
    for(var i=0; i<10; i++)
    {
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  return str;
};

var start = prompt("به فروشگاه اینترنتی میوه و سبزیجات خوش امدید\nبرای خرید 'شروع' و برای دیدن لیست موجودی محصولات 'لیست' را وارد کنید")
if(start === "لیست"){
    for(var i = 0 ; i < productsData.length ; i++){
        alert("نام محصول: " + productsData[i].name + "\n" + "قیمت به ازای هر کیلو گرم: " + productsData[i].price)
    }
} else if(start === "شروع"){
    while (basket != "پایان"){   
        var basket = prompt("اسم محصولات مورد نیاز خود را وارد کنید.\n درصورت اتمام خرید پایان را تایپ کنید")
        var inventory = productsData.some(function(product){
            if(basket == product.name && basket != "پایان"){
                return basket == product.name,
                window.productInfo = product
            }
        })
    
        if(basket != "پایان" && inventory == true){
            var quantity = prompt("مقدار مورد نیاز خود را به کیلوگرم وارد کنید")
            var quantity = fixNumbers(quantity)
            
            productInfo.price = productInfo.price * quantity
        } else if (basket != "پایان" && inventory == false){
            alert("کالای مورد نظر موجود نیست\n سایت را Reload کنید")
        }
    userBasket.push(productInfo)
    }
}
userBasket.pop()


var totalPrice = 0
for(var i = 0 ; i < userBasket.length ; i++ ){
    totalPrice = (userBasket[i].price) + totalPrice 
}

for (let i = 0; i < userBasket.length; i++) {
    alert("محصولات خریده شده: " + userBasket[i].name + "\n" + "قیمت کل محصول: " + userBasket[i].price)
}

alert(" مبلغ کل محصولات خریداری شده: " + totalPrice)