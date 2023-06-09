import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";

/**
 * This class just defines types, you should import PrivilegedAction instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class PrivilegedActionClass extends JavaClass {
    // ================== Method run ==================
    /**
     * @return original return type: 'java.lang.Object'
     */
    public run(): Promise<BasicOrJavaType | null>;
    // ================== Method run ==================
    /**
     * @return original return type: 'java.lang.Object'
     */
    public runSync(): BasicOrJavaType | null;
}

/**
 * Class java.security.PrivilegedAction.
 *
 * This actually imports the java class for further use.
 * The class PrivilegedActionClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class PrivilegedAction extends importClass<typeof PrivilegedActionClass>("java.security.PrivilegedAction") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default PrivilegedAction;