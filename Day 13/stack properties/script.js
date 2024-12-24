class properties {
    static staticproperty = "hello , static  ";
    static staticmethod(){
        return this.staticproperty
    }
    }
    console.log(properties.staticproperty);
    console.log(properties.staticmethod());


