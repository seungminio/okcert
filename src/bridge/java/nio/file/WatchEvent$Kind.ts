import { importClass, JavaClass } from "java-bridge";
import { Class as java_lang_Class } from "./../../lang/Class";

/**
 * This class just defines types, you should import WatchEvent$Kind instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class WatchEvent$KindClass extends JavaClass {
    // ================== Method name ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public name(): Promise<string | null>;
    // ================== Method name ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public nameSync(): string | null;
    // ================== Method type ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public type(): Promise<java_lang_Class | null>;
    // ================== Method type ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public typeSync(): java_lang_Class | null;
}

/**
 * Class java.nio.file.WatchEvent$Kind.
 *
 * This actually imports the java class for further use.
 * The class WatchEvent$KindClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class WatchEvent$Kind extends importClass<typeof WatchEvent$KindClass>("java.nio.file.WatchEvent$Kind") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default WatchEvent$Kind;