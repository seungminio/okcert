import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Double as java_lang_Double } from "./../../lang/Double";

/**
 * This class just defines types, you should import ObjDoubleConsumer instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class ObjDoubleConsumerClass extends JavaClass {
    // ================== Method accept ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'double'
     * @return original return type: 'void'
     */
    public accept(var0: BasicOrJavaType | null, var1: java_lang_Double | number): Promise<void>;
    // ================== Method accept ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @param var1 original type: 'double'
     * @return original return type: 'void'
     */
    public acceptSync(var0: BasicOrJavaType | null, var1: java_lang_Double | number): void;
}

/**
 * Class java.util.function.ObjDoubleConsumer.
 *
 * This actually imports the java class for further use.
 * The class ObjDoubleConsumerClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class ObjDoubleConsumer extends importClass<typeof ObjDoubleConsumerClass>("java.util.function.ObjDoubleConsumer") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default ObjDoubleConsumer;