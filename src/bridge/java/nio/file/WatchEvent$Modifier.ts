import { importClass, JavaClass } from "java-bridge";

/**
 * This class just defines types, you should import WatchEvent$Modifier instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class WatchEvent$ModifierClass extends JavaClass {
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
}

/**
 * Class java.nio.file.WatchEvent$Modifier.
 *
 * This actually imports the java class for further use.
 * The class WatchEvent$ModifierClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class WatchEvent$Modifier extends importClass<typeof WatchEvent$ModifierClass>("java.nio.file.WatchEvent$Modifier") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default WatchEvent$Modifier;