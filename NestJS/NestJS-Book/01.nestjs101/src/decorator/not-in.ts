import {registerDecorator, ValidationArguments, ValidationOptions} from "class-validator";

const NotIn = (property: string, validationOptions?: ValidationOptions) => { //데커레이터의 인수는 객체에서 참조하려고하는 다른 속성의 이름과 ValidationOptions 를 받는다
    return (object: Object, propertyName: string) => { // registerDecorator를 호출하는 함수 리턴 : 인수로 데커레이터가 선언될 객체와 속성이름 받음
        registerDecorator({ // registerDecorator 함수는 ValidationDecoratorOptions 객체를 인수로 받음
            name: 'NotIn', // Decorator 이름
            target: object.constructor, // Decorator는 객체가 생성될때 적용
            propertyName,
            options: validationOptions, // 유효성 옵션은 Decorator의 인수로 전달받은 것을 사용
            constraints: [property],
            validator: { // 유효성 검사 규칙
                validate(value: any, args: ValidationArguments){
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = (args.object)[relatedPropertyName]
                    // console.log(args.object) => createUserDTO 값을 음

                    return typeof value === 'string' && typeof relatedValue === 'string' && !relatedValue.includes(value)
                }
            }
        })
    }
}


export default NotIn;