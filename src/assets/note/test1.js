module.exports = `
#### 可重入锁（递归锁）

###### 概念

**可重入锁：** 同一个线程外层函数获得锁之后，内层递归函数仍然能获取该锁的代码，在同一个线程在外层方法获取锁的时候，在进入内层方法会自动获取锁（**前提是同一个锁对象** ）。

可重入锁有：synchronized和ReentrantLock，可重入锁可以在一定程度上避免死锁。

例：

\`\`\`java
public class Main {
    public synchronized void a(){
        System.out.println("get a lock");
        b();
    }
    public synchronized void b(){
        System.out.println("get b lock");
    }
}
\`\`\`

        在以上代码中，**如果**synchronized为**不可重入锁**，在调用a方法的过程中，调用b方法时会进入阻塞，等待Main对象释放锁，进入死锁状态。（实际调用a方法时时不会死锁。非重入锁的例子如下：）

 \`\`\`java
// 自定义不可重入锁类
public class Lock{
    private boolean isLocked = false;
    public synchronized void lock() throws InterruptedException{
        while(isLocked){
            wait();
        }
        isLocked = true;
    }
    public synchronized void unlock(){
        isLocked = false;
        notify();
    }
}
 \`\`\`

\`\`\`java
// 使用不可重入锁调用方法
public class Count{
    Lock lock = new Lock();
    public void print(){
        lock.lock();
        doAdd();// 进入阻塞，死锁
        lock.unlock();
    }
    public void doAdd(){
        lock.lock();
        //do something
        lock.unlock();
    }
}
\`\`\`

该例子参考地址为：https://blog.csdn.net/u012545728/article/details/80843595
`
